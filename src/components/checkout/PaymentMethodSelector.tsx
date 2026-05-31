'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { paymentMethods, getPaymentMethods } from '@/lib/payments';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface PaymentMethodSelectorProps {
  selectedMethod: string;
  onMethodChange: (methodId: string) => void;
  showRegionFilter?: boolean;
  region?: string;
}

export function PaymentMethodSelector({
  selectedMethod,
  onMethodChange,
  showRegionFilter = false,
  region
}: PaymentMethodSelectorProps) {
  const { language } = useApp();

  const getName = (method: typeof paymentMethods[0]) => {
    switch (language) {
      case 'zh':
        return method.nameZh;
      case 'ja':
        return method.nameJa;
      default:
        return method.name;
    }
  };

  const methods = showRegionFilter && region
    ? getPaymentMethods(region)
    : paymentMethods.filter(pm => pm.enabled);

  return (
    <RadioGroup value={selectedMethod} onValueChange={onMethodChange} className="space-y-3">
      {methods.map((method) => (
        <div
          key={method.id}
          className={cn(
            "flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-all",
            selectedMethod === method.id
              ? "border-emerald-500 bg-emerald-50/50 dark:bg-emerald-900/20"
              : "hover:border-emerald-300"
          )}
          onClick={() => onMethodChange(method.id)}
        >
          <RadioGroupItem value={method.id} id={method.id} />
          <Label
            htmlFor={method.id}
            className="flex-1 cursor-pointer flex items-center gap-3"
          >
            <div className="w-8 h-8 bg-muted rounded flex items-center justify-center text-xs font-bold">
              {method.type === 'card' ? (
                <span className="text-lg">💳</span>
              ) : method.type === 'wallet' ? (
                <span className="text-lg">👛</span>
              ) : (
                <span className="text-lg">🏦</span>
              )}
            </div>
            <div className="flex-1">
              <p className="font-medium">{getName(method)}</p>
              {method.region && method.region !== 'global' && (
                <p className="text-xs text-muted-foreground">
                  {method.region === 'china' ? '🇨🇳' : method.region === 'japan' ? '🇯🇵' : '🇰🇷'}
                </p>
              )}
            </div>
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
