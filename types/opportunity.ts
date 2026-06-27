export type OpportunityCategory =
  | "grant"
  | "accelerator"
  | "incubator"
  | "competition"
  | "fellowship"
  | "investor"
  | "other";

export type Opportunity = {
  id: string;
  title: string;
  organization: string;
  description: string;
  category: OpportunityCategory | string;
  deadline: Date | null;
  country: string | null;
  eligibility: string | null;
  fundingAmount: string | null;
  officialUrl: string;
  source: string;
  createdAt: Date;
  updatedAt: Date;
};

export type OpportunityFilters = {
  search?: string;
  category?: string;
  country?: string;
  sortBy?: "deadline" | "createdAt" | "title";
  sortOrder?: "asc" | "desc";
  page?: number;
  pageSize?: number;
};

export type PaginatedResult<T> = {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
};
