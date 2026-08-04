import { supabase } from "@/lib/supabase";

export interface CompanyInput {
  name: string;
  website?: string;
  industry?: string;
  size?: string;
  description?: string;
  location?: string;
  primaryContact?: string;
  email?: string;
  phone?: string;
}

export interface Company extends CompanyInput {
  id: string;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
}

const mapCompany = (row: any): Company => ({
  id: row.id,
  ownerId: row.owner_id,

  name: row.name,
  website: row.website ?? "",
  industry: row.industry ?? "",
  size: row.size ?? "",
  description: row.description ?? "",
  location: row.location ?? "",

  primaryContact: row.primary_contact ?? "",
  email: row.email ?? "",
  phone: row.phone ?? "",

  createdAt: row.created_at,
  updatedAt: row.updated_at,
});

export async function getCompanies() {
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

  if (error) throw error;

  return (data ?? []).map(mapCompany);
}

export async function getCompany(id: string) {
  const { data, error } = await supabase
    .from("companies")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;

  return mapCompany(data);
}

export async function createCompany(company: CompanyInput) {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("No authenticated user");
  }

  const now = new Date().toISOString();

  const { data, error } = await supabase
    .from("companies")
    .insert({
      ...company,
      primary_contact: company.primaryContact,

      owner_id: user.id,
      created_at: now,
      updated_at: now,
    })
    .select()
    .single();

  if (error) throw error;

  return mapCompany(data);
}

export async function updateCompany(
  id: string,
  updates: Partial<CompanyInput>
) {
  const { data, error } = await supabase
    .from("companies")
    .update({
      name: updates.name,
      website: updates.website,
      industry: updates.industry,
      size: updates.size,
      description: updates.description,
      location: updates.location,
      primary_contact: updates.primaryContact,
      email: updates.email,
      phone: updates.phone,

      updated_at: new Date().toISOString(),
    })
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;

  return mapCompany(data);
}

export async function deleteCompany(id: string) {
  const { error } = await supabase
    .from("companies")
    .delete()
    .eq("id", id);

  if (error) throw error;
}