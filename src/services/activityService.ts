// src/services/activityService.ts

import { supabase } from "@/lib/supabase";
import { Activity } from "@/types/activity";

const activityToDb = (activity: Activity) => ({
  id: activity.id,
  company_id: activity.companyId || null,
  opportunity_id: activity.opportunityId || null,
  type: activity.type,
  title: activity.title,
  description: activity.description,
  created_at: activity.createdAt,
});

const activityFromDb = (row: any): Activity => ({
  id: row.id,
  companyId: row.company_id ?? "",
  opportunityId: row.opportunity_id ?? "",
  type: row.type,
  title: row.title,
  description: row.description,
  createdAt: row.created_at,
});

export const ActivityService = {
  async getAll(): Promise<Activity[]> {
    const { data, error } = await supabase
      .from("activities")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to load activities:", error);
      throw error;
    }

    return (data ?? []).map(activityFromDb);
  },

  async getById(id: string): Promise<Activity | null> {
    const { data, error } = await supabase
      .from("activities")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Failed to load activity:", error);
      throw error;
    }

    return activityFromDb(data);
  },

  async getByCompany(companyId: string): Promise<Activity[]> {
    const { data, error } = await supabase
      .from("activities")
      .select("*")
      .eq("company_id", companyId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to load company activities:", error);
      throw error;
    }

    return (data ?? []).map(activityFromDb);
  },

  async getByOpportunity(opportunityId: string): Promise<Activity[]> {
    const { data, error } = await supabase
      .from("activities")
      .select("*")
      .eq("opportunity_id", opportunityId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to load opportunity activities:", error);
      throw error;
    }

    return (data ?? []).map(activityFromDb);
  },

  async create(activity: Activity): Promise<Activity> {
    const { data, error } = await supabase
      .from("activities")
      .insert(activityToDb(activity))
      .select()
      .single();

    if (error) {
      console.error("Failed to create activity:", error);
      throw error;
    }

    return activityFromDb(data);
  },

  async remove(id: string): Promise<void> {
    const { error } = await supabase
      .from("activities")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Failed to delete activity:", error);
      throw error;
    }
  },
};