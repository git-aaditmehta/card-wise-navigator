
import React from 'react';
import { Banknote, Percent, CreditCard, Home, Car, GraduationCap, FileText } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';

interface FinancialProfileAssessmentProps {
  formData: any;
  updateFormData: (section: string, data: Record<string, any>) => void;
  updateNestedFormData: (section: string, subsection: string, data: any) => void;
}

const FinancialProfileAssessment: React.FC<FinancialProfileAssessmentProps> = ({
  formData,
  updateFormData,
  updateNestedFormData
}) => {
  // Safely access properties with default values
  const annualIncome = formData?.annualIncome || 0;
  const debtToIncomeRatio = formData?.debtToIncomeRatio || {
    monthlyDebt: 0,
    monthlyIncome: 0,
    notSure: true
  };
  const creditScoreRange = formData?.creditScoreRange || 'unknown';
  const financialObligations = formData?.financialObligations || [];

  const handleObligationChange = (obligation: string, checked: boolean) => {
    let newObligations = [...financialObligations];
    
    if (checked) {
      newObligations.push(obligation);
    } else {
      newObligations = newObligations.filter(item => item !== obligation);
    }
    
    updateNestedFormData('', 'financialObligations', newObligations);
  };

  return (
    <div className="space-y-8">
      {/* Annual Income */}
      <div className="space-y-2">
        <Label htmlFor="income" className="flex items-center gap-2">
          <Banknote className="h-4 w-4 text-blue-500" />
          Annual Income
        </Label>
        <div className="text-sm text-muted-foreground">
          Please specify your exact annual income before taxes, including additional income sources
        </div>
        <div className="relative mt-1">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
          <Input
            type="number"
            id="income"
            value={annualIncome}
            onChange={(e) => updateNestedFormData('', 'annualIncome', parseInt(e.target.value) || 0)}
            className="pl-8"
          />
        </div>
        <div className="flex justify-between text-sm text-muted-foreground pt-1">
          <span>₹0</span>
          <span>₹5,000,000+</span>
        </div>
      </div>

      {/* Debt to Income Ratio */}
      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          <Percent className="h-4 w-4 text-blue-500" />
          Debt-to-Income Ratio
        </Label>
        <div className="text-sm text-muted-foreground mb-2">
          Help us understand how much of your monthly income goes towards debt payments
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="monthlyDebt">Total monthly debt payments</Label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
              <Input
                type="number"
                id="monthlyDebt"
                value={debtToIncomeRatio.monthlyDebt}
                onChange={(e) => updateNestedFormData('debtToIncomeRatio', 'monthlyDebt', parseInt(e.target.value) || 0)}
                className="pl-8"
                disabled={debtToIncomeRatio.notSure}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="monthlyIncome">Total monthly income</Label>
            <div className="relative mt-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
              <Input
                type="number"
                id="monthlyIncome"
                value={debtToIncomeRatio.monthlyIncome}
                onChange={(e) => updateNestedFormData('debtToIncomeRatio', 'monthlyIncome', parseInt(e.target.value) || 0)}
                className="pl-8"
                disabled={debtToIncomeRatio.notSure}
              />
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2 mt-2">
          <Checkbox
            id="notSure"
            checked={debtToIncomeRatio.notSure}
            onCheckedChange={(checked) => {
              updateNestedFormData('debtToIncomeRatio', 'notSure', checked === true);
            }}
          />
          <label
            htmlFor="notSure"
            className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I'm not sure (we'll calculate based on your other answers)
          </label>
        </div>
      </div>

      {/* Credit Score Range */}
      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          <CreditCard className="h-4 w-4 text-blue-500" />
          Credit Score Range
        </Label>
        <RadioGroup 
          value={creditScoreRange}
          onValueChange={(value) => updateNestedFormData('', 'creditScoreRange', value)}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 pt-2"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="below650" id="below650" />
            <Label htmlFor="below650" className="cursor-pointer">Below 650</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="650-700" id="650-700" />
            <Label htmlFor="650-700" className="cursor-pointer">650-700</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="701-750" id="701-750" />
            <Label htmlFor="701-750" className="cursor-pointer">701-750</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="751-800" id="751-800" />
            <Label htmlFor="751-800" className="cursor-pointer">751-800</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="above800" id="above800" />
            <Label htmlFor="above800" className="cursor-pointer">Above 800</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="unknown" id="unknown" />
            <Label htmlFor="unknown" className="cursor-pointer">I don't know my credit score</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Financial Obligations */}
      <div className="space-y-2">
        <Label className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-blue-500" />
          Financial Obligations (Select all that apply)
        </Label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="homeLoan"
                checked={financialObligations.includes('homeLoan')}
                onCheckedChange={(checked) => {
                  handleObligationChange('homeLoan', checked === true);
                }}
              />
              <div className="grid gap-1.5">
                <label
                  htmlFor="homeLoan"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  <Home className="h-4 w-4 mr-1 text-blue-500" />
                  Home loan/mortgage
                </label>
                {financialObligations.includes('homeLoan') && (
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">₹</span>
                    <Input
                      type="number"
                      placeholder="Monthly payment"
                      className="h-8 pl-7 text-sm"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="carLoan"
                checked={financialObligations.includes('carLoan')}
                onCheckedChange={(checked) => {
                  handleObligationChange('carLoan', checked === true);
                }}
              />
              <div className="grid gap-1.5">
                <label
                  htmlFor="carLoan"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  <Car className="h-4 w-4 mr-1 text-blue-500" />
                  Car loan
                </label>
                {financialObligations.includes('carLoan') && (
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">₹</span>
                    <Input
                      type="number"
                      placeholder="Monthly payment"
                      className="h-8 pl-7 text-sm"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="personalLoan"
                checked={financialObligations.includes('personalLoan')}
                onCheckedChange={(checked) => {
                  handleObligationChange('personalLoan', checked === true);
                }}
              />
              <div className="grid gap-1.5">
                <label
                  htmlFor="personalLoan"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  <FileText className="h-4 w-4 mr-1 text-blue-500" />
                  Personal loan
                </label>
                {financialObligations.includes('personalLoan') && (
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">₹</span>
                    <Input
                      type="number"
                      placeholder="Monthly payment"
                      className="h-8 pl-7 text-sm"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="educationLoan"
                checked={financialObligations.includes('educationLoan')}
                onCheckedChange={(checked) => {
                  handleObligationChange('educationLoan', checked === true);
                }}
              />
              <div className="grid gap-1.5">
                <label
                  htmlFor="educationLoan"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  <GraduationCap className="h-4 w-4 mr-1 text-blue-500" />
                  Education loan
                </label>
                {financialObligations.includes('educationLoan') && (
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">₹</span>
                    <Input
                      type="number"
                      placeholder="Monthly payment"
                      className="h-8 pl-7 text-sm"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="creditCardBalance"
                checked={financialObligations.includes('creditCardBalance')}
                onCheckedChange={(checked) => {
                  handleObligationChange('creditCardBalance', checked === true);
                }}
              />
              <div className="grid gap-1.5">
                <label
                  htmlFor="creditCardBalance"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  <CreditCard className="h-4 w-4 mr-1 text-blue-500" />
                  Existing credit card balances
                </label>
                {financialObligations.includes('creditCardBalance') && (
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs">₹</span>
                    <Input
                      type="number"
                      placeholder="Total balance"
                      className="h-8 pl-7 text-sm"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox
                id="otherObligations"
                checked={financialObligations.includes('otherObligations')}
                onCheckedChange={(checked) => {
                  handleObligationChange('otherObligations', checked === true);
                }}
              />
              <div className="grid gap-1.5 w-full">
                <label
                  htmlFor="otherObligations"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
                >
                  <FileText className="h-4 w-4 mr-1 text-blue-500" />
                  Other significant recurring commitments
                </label>
                {financialObligations.includes('otherObligations') && (
                  <Input
                    type="text"
                    placeholder="Specify other commitments"
                    className="h-8 text-sm mt-1"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialProfileAssessment;
