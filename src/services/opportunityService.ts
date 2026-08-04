import { supabase } from "@/lib/supabase";
import { Opportunity } from "@/types/opportunity";

const opportunityToDb = (opportunity: Opportunity) => ({
  company_id: opportunity.companyId,
  company_name: opportunity.companyName,

  contact_name: opportunity.contactName,
  email: opportunity.email,
  phone: opportunity.phone,

  website: opportunity.website,
  industry: opportunity.industry,
  company_size: opportunity.companySize,

  business_problem: opportunity.businessProblem,
  current_process: opportunity.currentProcess,
  proposed_solution: opportunity.proposedSolution,

  technology_needs: opportunity.technologyNeeds,

  status: opportunity.status,
  estimated_value: opportunity.estimatedValue,

  source: opportunity.source,
  last_contact: opportunity.lastContact,
  next_follow_up: opportunity.nextFollowUp,

  notes: opportunity.notes,

  created_at: opportunity.createdAt,
  updated_at: opportunity.updatedAt,
});

const opportunityFromDb = (row: any): Opportunity => ({
  id: row.id,

  companyId: row.company_id ?? "",
  companyName: row.company_name ?? "",

  contactName: row.contact_name ?? "",
  email: row.email ?? "",
  phone: row.phone ?? "",

  website: row.website ?? "",
  industry: row.industry ?? "",
  companySize: row.company_size ?? "",

  businessProblem: row.business_problem ?? "",
  currentProcess: row.current_process ?? "",

  proposedSolution: row.proposed_solution ?? "",

  technologyNeeds: row.technology_needs ?? [],

  status: row.status ?? "research",

  estimatedValue: Number(row.estimated_value ?? 0),

  source: row.source ?? "Cold Outreach",

  lastContact: row.last_contact ?? "",
  nextFollowUp: row.next_follow_up ?? "",

  notes: row.notes ?? "",

  createdAt: row.created_at,
  updatedAt: row.updated_at,
  ownerId: ""
});

export const OpportunityService = {
  async getAll(): Promise<Opportunity[]> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return [];

    const { data, error } = await supabase
      .from("opportunities")
      .select("*")
      .eq("owner_id", user.id)
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return (data ?? []).map(opportunityFromDb);
  },

  async getById(id: string): Promise<Opportunity | null> {
    const { data, error } = await supabase
      .from("opportunities")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw error;

    return opportunityFromDb(data);
  },

  async getByCompany(
    companyId: string
  ): Promise<Opportunity[]> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return [];

    const { data, error } = await supabase
      .from("opportunities")
      .select("*")
      .eq("owner_id", user.id)
      .eq("company_id", companyId)
      .order("created_at", {
        ascending: false,
      });

    if (error) throw error;

    return (data ?? []).map(opportunityFromDb);
  },

  async create(
    opportunity: Opportunity
  ): Promise<Opportunity> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    const now = new Date().toISOString();

    const { data, error } = await supabase
      .from("opportunities")
      .insert({
        ...opportunityToDb(opportunity),

        owner_id: user.id,

        created_at: now,
        updated_at: now,
      })
      .select()
      .single();

    if (error) throw error;

    return opportunityFromDb(data);
  },

  async update(
    opportunity: Opportunity
  ): Promise<Opportunity> {
    const { data, error } = await supabase
      .from("opportunities")
      .update({
        ...opportunityToDb(opportunity),

        updated_at: new Date().toISOString(),
      })
      .eq("id", opportunity.id)
      .select()
      .single();

    if (error) throw error;

    return opportunityFromDb(data);
  },

  async remove(id: string): Promise<void> {
    const { error } = await supabase
      .from("opportunities")
      .delete()
      .eq("id", id);

    if (error) throw error;
  },
};