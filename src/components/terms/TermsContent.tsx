'use client';

import { FileText, Shield, Clock, RefreshCw, Globe } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export function TermsContent() {
  const { t } = useApp();

  return (
    <main className="flex-1 py-16">
      <div className="page-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 mb-6">
              <FileText className="h-8 w-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl font-bold font-serif mb-4">{t.terms.title}</h1>
            <p className="text-lg text-muted-foreground">{t.terms.description}</p>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Globe className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.terms.acceptance}</h2>
                  <p className="text-muted-foreground">{t.terms.acceptanceDesc}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.terms.usage}</h2>
                  <p className="text-muted-foreground">{t.terms.usageDesc}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.terms.term}</h2>
                  <p className="text-muted-foreground">{t.terms.termDesc}</p>
                </div>
              </div>
            </section>

            <section>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <RefreshCw className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{t.terms.modifications}</h2>
                  <p className="text-muted-foreground">{t.terms.modificationsDesc}</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}