export function MenuItem({ name, description, price, priceClassName = "" }) {
  return (
    <div className="flex justify-between items-baseline gap-4">
      <span className="wrap-break-word text-left">{name}</span>
      {description && (
        <span className="italic text-stone-600 text-right flex-1">
          {description}
        </span>
      )}
      {price && (
        <span className={`whitespace-nowrap shrink-0 ${priceClassName}`}>
          {price}
        </span>
      )}
    </div>
  );
}
