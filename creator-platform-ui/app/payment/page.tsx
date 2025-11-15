'use client';

import { useState } from 'react';
import PlanCard from '@/components/PlanCard';
import PaymentOption from '@/components/PaymentOption';
import SectionHeader from '@/components/SectionHeader';
import { paymentPlans } from '@/lib/mockData';
import { formatCurrency } from '@/lib/utils';

const paymentOptions = [
  { provider: 'PayPal', description: 'Direkt via PayPal Checkout (UI Mock)' },
  { provider: 'Kreditkarte', description: 'Visa, Mastercard, Amex (Dummy)' }
] as const;

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState(paymentPlans[0].id);
  const [paymentMethod, setPaymentMethod] = useState<'PayPal' | 'Kreditkarte'>('PayPal');

  const activePlan = paymentPlans.find((plan) => plan.id === selectedPlan)!;

  return (
    <div className="space-y-10">
      <SectionHeader
        eyebrow="Zahlung"
        title="Aboplan auswählen"
        description="Fans zahlen 2–3 € / Monat – Plattform Fee 15-20% wird automatisch berücksichtigt."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {paymentPlans.map((plan) => (
            <PlanCard
              key={plan.id}
              title={plan.title}
              price={plan.price}
              features={plan.features}
              selected={selectedPlan === plan.id}
              onSelect={() => setSelectedPlan(plan.id)}
            />
          ))}
        </div>
        <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h3 className="text-xl font-semibold">Zahlungsmethode</h3>
          <div className="space-y-3">
            {paymentOptions.map((option) => (
              <PaymentOption
                key={option.provider}
                provider={option.provider}
                description={option.description}
                selected={paymentMethod === option.provider}
                onSelect={() => setPaymentMethod(option.provider)}
              />
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-[#090613] p-4 text-sm text-white/70">
            <p>Monatliche Zahlung: <span className="text-white font-semibold">{formatCurrency(activePlan.price)}</span></p>
            <p>Plattform Fee: 15–20% bereits enthalten.</p>
            <p>Next Step: Dummy Confirmation → Dashboard Routing.</p>
          </div>
          <button className="w-full rounded-full bg-gradient-to-r from-brand-500 to-pink-500 py-3 font-semibold">
            Zahlung bestätigen
          </button>
          <p className="text-center text-xs text-white/50">Nur UI – keine echten Zahlungen.</p>
        </div>
      </div>
    </div>
  );
}
