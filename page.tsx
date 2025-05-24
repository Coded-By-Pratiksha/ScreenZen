'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function Home() {
  const [nudge, setNudge] = useState('');
  const [loading, setLoading] = useState(false);

  const getNudge = async () => {
    setLoading(true);
    const response = await fetch('/api/nudge', { method: 'POST' });
    const data = await response.json();
    setNudge(data.message);
    setLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">📱 ScreenZen</h1>
      <p className="mb-4">Smart nudges to reduce screen time.</p>

      <Button onClick={getNudge} disabled={loading}>
        {loading ? 'Thinking...' : 'Get AI Nudge'}
      </Button>

      {nudge && (
        <Card className="mt-6 max-w-md">
          <CardContent className="p-4 text-center">
            <p>{nudge}</p>
          </CardContent>
        </Card>
      )}
    </main>
  );
}