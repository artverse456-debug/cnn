import AuthPortal from '@/components/AuthPortal';
import SectionHeader from '@/components/SectionHeader';

export default function LoginPage() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Login"
        title="Creator & Fans"
        description="Dummy Auth simuliert das Routing – keine echten Accounts notwendig."
      />
      <AuthPortal />
    </div>
  );
}
