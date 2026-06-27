export type FounderProfile = {
  id: string;
  userId: string;
  startupName: string;
  industry: string;
  country: string;
  startupStage: string;
  teamSize: number;
  fundingStage: string;
  website: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export type FounderProfileInput = Omit<
  FounderProfile,
  "id" | "userId" | "createdAt" | "updatedAt"
>;
