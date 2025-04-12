
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import FinancialProfileStepper from './FinancialProfileStepper';
import FinancialProfileAssessment from './FinancialProfileAssessment';
import ExpenditurePatternAnalysis from './ExpenditurePatternAnalysis';
import BehavioralMetrics from './BehavioralMetrics';
import LifestyleIndicators from './LifestyleIndicators';
import AspirationalFactors from './AspirationalFactors';
import { toast } from '@/hooks/use-toast';

export interface FinancialProfileData {
  // Financial Profile Assessment
  annualIncome?: string;
  debtToIncomeRatio?: {
    monthlyDebt?: string;
    monthlyIncome?: string;
  };
  creditScore?: string;
  financialObligations?: {
    homeLoan?: { selected: boolean; payment?: string };
    carLoan?: { selected: boolean; payment?: string };
    personalLoan?: { selected: boolean; payment?: string };
    educationLoan?: { selected: boolean; payment?: string };
    creditCardBalances?: { selected: boolean; total?: string };
    other?: { selected: boolean; details?: string };
  };

  // Expenditure Pattern Analysis
  monthlySpending?: {
    groceries?: string;
    diningOut?: string;
    fuel?: string;
    onlineShopping?: string;
    utilities?: string;
    entertainment?: string;
    travel?: string;
    healthcare?: string;
    other?: string;
  };
  transactionFrequency?: {
    weeklyTransactions?: string;
    averageValue?: string;
    largestExpense?: string;
  };
  seasonalSpending?: {
    highestMonths?: string[];
    seasonalCategories?: string[];
    annualPurchases?: string;
  };

  // Behavioral Metrics
  paymentHabits?: string;
  cardUsage?: {
    spendingPercentage?: string;
    activeCards?: string;
    primaryCardPercentage?: string;
  };
  preferredPaymentMethods?: {
    smallPurchases?: string;
    largePurchases?: string;
    onlineTransactions?: string;
    recurringBills?: string;
  };

  // Lifestyle Indicators
  travelFrequency?: {
    domesticTrips?: string;
    internationalTrips?: string;
    averageSpending?: string;
    accommodation?: string;
  };
  shoppingPreferences?: {
    onlinePercentage?: string;
    favoriteRetailers?: string;
    monthlyDiscretionary?: string;
    topCategories?: string[];
  };
  lifestyleActivities?: string[];

  // Aspirational Factors
  rewardPreferences?: {
    cashback?: string;
    travelMiles?: string;
    shoppingDiscounts?: string;
    diningBenefits?: string;
    entertainmentPerks?: string;
  };
  premiumServices?: string[];
  feeTolerance?: {
    maxAnnualFee?: string;
    justifyingFeatures?: string;
    minimumValue?: string;
  };
  cardPrestige?: string;
}

const FinancialProfileForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FinancialProfileData>({});

  const totalSteps = 5;

  const handleStepSubmit = (stepData: Record<string, any>) => {
    updateFormData(stepData);
    
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleFinalSubmit();
    }
  };

  const updateFormData = (newData: Record<string, any>) => {
    setFormData((prevData) => {
      return { ...prevData, ...newData };
    });
  };

  const handleSectionData = (section: string, data: Record<string, any>) => {
    updateFormData({ [section]: data });
  };

  const handleFinalSubmit = () => {
    console.log('Submitted form data:', formData);
    toast({
      title: "Financial Profile Submitted",
      description: "We'll analyze your profile and recommend the best credit cards for you.",
    });
    // Here you would typically send the data to an API endpoint
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getCurrentStepComponent = () => {
    switch (currentStep) {
      case 1:
        return (
          <FinancialProfileAssessment
            onSubmit={handleStepSubmit}
            initialData={formData.financialAssessment || {}}
          />
        );
      case 2:
        return (
          <ExpenditurePatternAnalysis
            onSubmit={handleStepSubmit}
            initialData={formData.expenditurePattern || {}}
          />
        );
      case 3:
        return (
          <BehavioralMetrics
            onSubmit={handleStepSubmit}
            initialData={formData.behavioralMetrics || {}}
          />
        );
      case 4:
        return (
          <LifestyleIndicators
            onSubmit={handleStepSubmit}
            initialData={formData.lifestyleIndicators || {}}
          />
        );
      case 5:
        return (
          <AspirationalFactors
            onSubmit={handleStepSubmit}
            initialData={formData.aspirationalFactors || {}}
          />
        );
      default:
        return null;
    }
  };

  return (
    <section id="profile" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-cardwise-blue-500">Create Your Financial Profile</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Answer a few questions about your financial situation, spending habits, and preferences
            to get personalized credit card recommendations.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto shadow-md">
          <CardContent className="p-0">
            <div className="bg-cardwise-blue-50 p-6 border-b">
              <FinancialProfileStepper currentStep={currentStep} totalSteps={totalSteps} />
            </div>
            <div className="p-6">
              {getCurrentStepComponent()}
              
              <div className="flex justify-between mt-8">
                {currentStep > 1 ? (
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={handlePreviousStep}
                  >
                    Previous
                  </Button>
                ) : (
                  <div></div>
                )}
                
                {/* Form submission is handled by the individual step components */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FinancialProfileForm;
