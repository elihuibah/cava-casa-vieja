export function MenuItem({ name, description, price }) {
  return (
    <div className="flex justify-between items-baseline gap-4">
      <span className="whitespace-nowrap">{name}</span>
      {description && (
        <span className="italic text-stone-600 text-right flex-1">
          {description}
        </span>
      )}
      {price && <span className="whitespace-nowrap">{price}</span>}
    </div>
  );
}
