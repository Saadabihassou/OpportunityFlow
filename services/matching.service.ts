import type { FounderProfileInput } from "@/types/profile";
import type { Opportunity } from "@/types/opportunity";

export type MatchScore = {
  opportunityId: string;
  score: number;
  reasons: string[];
};

/**
 * Rank opportunities by relevance to a founder profile.
 * MVP: rule-based scoring. Post-MVP: AI embeddings / LLM ranking.
 */
export function rankOpportunities(
  _profile: FounderProfileInput,
  _opportunities: Opportunity[],
): MatchScore[] {
  // Milestone 7
  return [];
}

export function getRecommendedOpportunities(
  profile: FounderProfileInput,
  opportunities: Opportunity[],
  limit = 10,
): Opportunity[] {
  const ranked = rankOpportunities(profile, opportunities);
  const topIds = new Set(
    ranked
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((r) => r.opportunityId),
  );
  return opportunities.filter((o) => topIds.has(o.id));
}
