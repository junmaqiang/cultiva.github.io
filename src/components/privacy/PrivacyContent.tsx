'use client';

import { Lock, FileSearch, Users, Mail, Settings, ShieldCheck } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export function PrivacyContent() {
  const { t } = useApp();

  return (
    <main className="flex-1 py-16">
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
              <Lock className="h-8 w-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold font-serif mb-4">{t.privacy.title}</h1>
            <p className="text-lg text-muted-foreground">{t.privacy.description}</p>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.privacy.infoCollection}</h2>
                  <p className="text-muted-foreground">{t.privacy.infoCollectionDesc}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <FileSearch className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.privacy.infoUsage}</h2>
                  <p className="text-muted-foreground">{t.privacy.infoUsageDesc}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.privacy.infoSharing}</h2>
                  <p className="text-muted-foreground">{t.privacy.infoSharingDesc}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Settings className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.privacy.userRights}</h2>
                  <p className="text-muted-foreground">{t.privacy.userRightsDesc}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.privacy.contact}</h2>
                  <p className="text-muted-foreground">{t.privacy.contactDesc}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}