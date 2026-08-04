import { supabase } from "@/lib/supabase";

import {
  Proposal,
  ProposalStatus
} from "@/types/proposal";

function cleanUuid(
  value: string | null | undefined
) {

  if (!value || value.trim() === "") {
    return null;
  }

  return value;

}

function mapProposal(
  row: any
): Proposal {

  return {

    id: row.id,

    companyId: row.company_id,

    opportunityId:
      row.opportunity_id ?? null,

    blueprintId:
      row.blueprint_id ?? null,

    title:
      row.title,

    companyName:
      row.company_name ?? "",

    industry:
      row.industry ?? "",

    businessProblem:
      row.business_problem ?? "",

    estimatedValue:
      Number(row.estimated_value ?? 0),

    services:
      row.services ?? [],

    investment:
      Number(row.investment ?? 0),

    timeline:
      row.timeline ?? "",

    status:
      (
        [
          "DRAFT",
          "SENT",
          "VIEWED",
          "ACCEPTED",
          "REJECTED",
          "EXPIRED"
        ].includes(row.status)
          ? row.status
          : "DRAFT"
      ) as ProposalStatus,

    ownerId:
      row.owner_id,

    createdAt:
      row.created_at,

    updatedAt:
      row.updated_at

  };

}

function mapToRow(
  proposal: Proposal
) {

  return {

    company_id:
      cleanUuid(proposal.companyId),

    opportunity_id:
      cleanUuid(proposal.opportunityId),

    blueprint_id:
      cleanUuid(proposal.blueprintId),

    title:
      proposal.title,

    services:
      proposal.services ?? [],

    investment:
      proposal.investment ?? 0,

    timeline:
      proposal.timeline ?? "",

    status:
      proposal.status ?? "DRAFT",

    owner_id:
      cleanUuid(proposal.ownerId)

  };

}

export const ProposalService = {

  async getAll(): Promise<Proposal[]> {

    const {
      data,
      error
    } = await supabase

      .from("proposals")

      .select("*")

      .order(
        "created_at",
        {
          ascending: false
        }
      );

    if (error) {
      throw error;
    }

    return (data ?? []).map(mapProposal);

  },

  async create(
    proposal: Proposal
  ): Promise<Proposal> {

    const {
      data,
      error
    } = await supabase

      .from("proposals")

      .insert(
        mapToRow(proposal)
      )

      .select()

      .single();

    if (error) {
      throw error;
    }

    return mapProposal(data);

  },

  async update(
    proposal: Proposal
  ): Promise<Proposal> {

    const {
      data,
      error
    } = await supabase

      .from("proposals")

      .update(
        mapToRow(proposal)
      )

      .eq(
        "id",
        proposal.id
      )

      .select()

      .single();

    if (error) {
      throw error;
    }

    return mapProposal(data);

  },

  async remove(
    id: string
  ): Promise<void> {

    const {
      error
    } = await supabase

      .from("proposals")

      .delete()

      .eq(
        "id",
        id
      );

    if (error) {
      throw error;
    }

  },

  async getById(
    id: string
  ): Promise<Proposal> {

    const {
      data,
      error
    } = await supabase

      .from("proposals")

      .select("*")

      .eq(
        "id",
        id
      )

      .single();

    if (error) {
      throw error;
    }

    return mapProposal(data);

  },

  async getByCompany(
    companyId: string
  ): Promise<Proposal[]> {

    const {
      data,
      error
    } = await supabase

      .from("proposals")

      .select("*")

      .eq(
        "company_id",
        companyId
      );

    if (error) {
      throw error;
    }

    return (data ?? []).map(mapProposal);

  },

  async getByOpportunity(
    opportunityId: string
  ): Promise<Proposal[]> {

    const {
      data,
      error
    } = await supabase

      .from("proposals")

      .select("*")

      .eq(
        "opportunity_id",
        opportunityId
      );

    if (error) {
      throw error;
    }

    return (data ?? []).map(mapProposal);

  }

};