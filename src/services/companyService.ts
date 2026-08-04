// src/services/companyService.ts

import { supabase } from "@/lib/supabase";
import { Company } from "@/config/company";

const companyToDb = (company: Company) => ({
  owner_id: company.ownerId,

  name: company.name,
  website: company.website,
  industry: company.industry,
  size: company.size,
  description: company.description,
  location: company.location,
  primary_contact: company.primaryContact,
  email: company.email,
  phone: company.phone,
  created_at: company.createdAt,
  updated_at: company.updatedAt,
});

const companyFromDb = (row: any): Company => ({
  id: row.id,

  ownerId: row.owner_id ?? "",

  name: row.name,
  website: row.website ?? "",
  industry: row.industry ?? "",
  size: row.size,
  description: row.description ?? "",
  location: row.location ?? "",

  primaryContact: row.primary_contact ?? "",
  email: row.email ?? "",
  phone: row.phone ?? "",

  createdAt: row.created_at,
  updatedAt: row.updated_at,
});

export const CompanyService = {
  async getAll(): Promise<Company[]> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return [];

    const { data, error } = await supabase
      .from("companies")
      .select("*")
      .eq("owner_id", user.id)
      .order("created_at", {
        ascending: false,
      });

    if (error) {
      console.error(error);
      throw error;
    }

    return (data ?? []).map(companyFromDb);
  },

  async getById(id: string): Promise<Company | null> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return null;

    const { data, error } = await supabase
      .from("companies")
      .select("*")
      .eq("id", id)
      .eq("owner_id", user.id)
      .single();

    if (error) {
      console.error(error);
      throw error;
    }

    return companyFromDb(data);
  },

  async create(company: Company): Promise<Company> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    const {
      data,
      error,
    } = await supabase
      .from("companies")
      .insert({
        ...companyToDb(company),
        owner_id: user.id,
      })
      .select()
      .single();

    if (error) {
      console.error(error);
      throw error;
    }

    return companyFromDb(data);
  },

  async update(company: Company): Promise<Company> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    const {
      data,
      error,
    } = await supabase
      .from("companies")
      .update({
        ...companyToDb({
          ...company,
          updatedAt: new Date().toISOString(),
        }),
      })
      .eq("id", company.id)
      .eq("owner_id", user.id)
      .select()
      .single();

    if (error) {
      console.error(error);
      throw error;
    }

    return companyFromDb(data);
  },

  async remove(id: string): Promise<void> {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("User not authenticated");
    }

    const { error } = await supabase
      .from("companies")
      .delete()
      .eq("id", id)
      .eq("owner_id", user.id);

    if (error) {
      console.error(error);
      throw error;
    }
  },
};