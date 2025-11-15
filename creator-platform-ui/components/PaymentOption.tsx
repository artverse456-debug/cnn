interface PaymentOptionProps {
  provider: 'PayPal' | 'Kreditkarte';
  description: string;
  selected: boolean;
  onSelect: () => void;
}

export default function PaymentOption({ provider, description, selected, onSelect }: PaymentOptionProps) {
  return (
    <button
      onClick={onSelect}
      className={`w-full rounded-2xl border px-5 py-4 text-left transition ${
        selected ? 'border-brand-400 bg-brand-400/10' : 'border-white/10 hover:border-white/30'
      }`}
    >
      <p className="text-lg font-semibold">{provider}</p>
      <p className="text-sm text-white/60">{description}</p>
    </button>
  );
}
