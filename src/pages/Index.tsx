
import React from 'react';
import Layout from '@/components/Layout';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CardComparison from '@/components/CardComparison';
import FinancialProfileForm from '@/components/FinancialProfileForm';
import CardRecommendations from '@/components/CardRecommendations';
import CardBenefitTracker from '@/components/CardBenefitTracker';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col">
        <div className="pt-16"> {/* Add padding to account for fixed header */}
          <main className="flex-grow">
            <Hero />
            <CardRecommendations />
            <CardComparison />
            <CardBenefitTracker />
            <FinancialProfileForm />
          </main>
          <Footer />
        </div>
      </div>
    </Layout>
  );
};

export default Index;
