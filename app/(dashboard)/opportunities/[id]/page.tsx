type OpportunityDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function OpportunityDetailPage({
  params,
}: OpportunityDetailPageProps) {
  const { id } = await params;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Opportunity</h1>
      <p className="text-muted-foreground text-sm">
        Detail view for opportunity {id} — implement in Milestone 6.
      </p>
    </div>
  );
}
