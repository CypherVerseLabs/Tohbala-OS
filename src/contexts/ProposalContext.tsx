// src/contexts/ProposalContext.tsx

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  ReactNode
} from "react";

import {
  Proposal
} from "@/types/proposal";

import {
  ProposalService
} from "@/services/proposalService";

type ProposalCreateInput = Omit<
  Proposal,
  "id" | "createdAt" | "updatedAt"
>;

interface ProposalContextType {

  proposals: Proposal[];

  loading: boolean;

  error: string | null;

  loadProposals(): Promise<void>;

  refreshProposals(): Promise<void>;

  addProposal(
    proposal: ProposalCreateInput
  ): Promise<void>;

  updateProposal(
    proposal: Proposal
  ): Promise<void>;

  deleteProposal(
    id: string
  ): Promise<void>;

}

const ProposalContext =
createContext<ProposalContextType | null>(null);

export function ProposalProvider({
  children
}: {
  children: ReactNode
}) {

  const [
    proposals,
    setProposals
  ] = useState<Proposal[]>([]);

  const [
    loading,
    setLoading
  ] = useState(false);

  const [
    error,
    setError
  ] = useState<string | null>(null);

  const loadProposals =
    useCallback(async () => {

      try {

        setLoading(true);
        setError(null);

        const data =
          await ProposalService.getAll();

        setProposals(data);

      }

      catch (error: any) {

        console.error(
          "Loading proposals failed",
          error
        );

        setError(
          error.message ??
          "Failed loading proposals"
        );

      }

      finally {

        setLoading(false);

      }

    }, []);

  useEffect(() => {

    loadProposals();

  }, [
    loadProposals
  ]);

  const refreshProposals =
    async () => {

      await loadProposals();

    };

  const addProposal =
    async (
      proposal: ProposalCreateInput
    ) => {

      try {

        setError(null);

        await ProposalService.create(
          proposal as Proposal
        );

        // Reload from Supabase so UI always stays in sync
        await loadProposals();

      }

      catch (error: any) {

        console.error(
          "Creating proposal failed",
          error
        );

        setError(
          error.message ??
          "Creating proposal failed"
        );

        throw error;

      }

    };

  const updateProposal =
    async (
      proposal: Proposal
    ) => {

      try {

        setError(null);

        const updated =
          await ProposalService.update(
            proposal
          );

        setProposals(prev =>
          prev.map(item =>
            item.id === updated.id
              ? updated
              : item
          )
        );

      }

      catch (error: any) {

        console.error(
          "Updating proposal failed",
          error
        );

        setError(
          error.message ??
          "Updating proposal failed"
        );

        throw error;

      }

    };

  const deleteProposal =
    async (
      id: string
    ) => {

      try {

        setError(null);

        await ProposalService.remove(
          id
        );

        setProposals(prev =>
          prev.filter(item =>
            item.id !== id
          )
        );

      }

      catch (error: any) {

        console.error(
          "Deleting proposal failed",
          error
        );

        setError(
          error.message ??
          "Deleting proposal failed"
        );

        throw error;

      }

    };

  return (

    <ProposalContext.Provider

      value={{

        proposals,

        loading,

        error,

        loadProposals,

        refreshProposals,

        addProposal,

        updateProposal,

        deleteProposal

      }}

    >

      {children}

    </ProposalContext.Provider>

  );

}

export function useProposalContext() {

  const context =
    useContext(
      ProposalContext
    );

  if (!context) {

    throw new Error(
      "useProposalContext must be inside ProposalProvider"
    );

  }

  return context;

}