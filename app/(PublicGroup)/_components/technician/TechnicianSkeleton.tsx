export const TechnicianSkeleton = () => {
  return (
    <div className="">
      {Array.from({ length: 1 }).map((_, i) => (
        <div key={i} className="h-64 animate-pulse rounded-2xl bg-muted" />
      ))}
    </div>
  );
};
