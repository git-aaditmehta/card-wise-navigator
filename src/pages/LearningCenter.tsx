
import React from 'react';
import Layout from '@/components/Layout';
import { Lightbulb, Zap, Target, BarChart } from 'lucide-react';

const LearningCenter = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-2">
          <Lightbulb className="h-8 w-8 text-[#e6ac00]" />
          <h1 className="text-3xl font-bold">Learning Center</h1>
        </div>
        <p className="text-muted-foreground mb-8">
          Learn about credit cards, rewards, benefits, and how to maximize your value.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Credit Card Rewards */}
          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="h-6 w-6 text-purple-500" />
              <h2 className="text-xl font-semibold">Understanding Credit Card Rewards</h2>
            </div>
            <p className="text-gray-700">
              Learn the differences between points, miles, and cash back, and how to determine which is
              most valuable for your lifestyle.
            </p>
          </div>

          {/* Sign-up Bonuses */}
          <div className="bg-purple-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-6 w-6 flex items-center justify-center text-purple-500">
                <span className="text-xl">🎁</span>
              </div>
              <h2 className="text-xl font-semibold">Maximizing Sign-up Bonuses</h2>
            </div>
            <p className="text-gray-700">
              Strategies for meeting minimum spend requirements and timing your applications to
              maximize welcome offers.
            </p>
          </div>

          {/* Credit Score */}
          <div className="bg-green-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <BarChart className="h-6 w-6 text-green-500" />
              <h2 className="text-xl font-semibold">Understanding Your Credit Score</h2>
            </div>
            <p className="text-gray-700">
              How credit scores work, what factors affect them, and how credit card applications impact
              your score.
            </p>
          </div>

          {/* Card Strategies */}
          <div className="bg-cyan-50 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-cyan-500" />
              <h2 className="text-xl font-semibold">Advanced Card Strategies</h2>
            </div>
            <p className="text-gray-700">
              How to create a card portfolio that maximizes rewards across all spending categories and
              optimizes benefits.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LearningCenter;
