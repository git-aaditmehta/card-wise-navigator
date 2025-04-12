
import React from 'react';
import { Star, Plane, Gift, Utensils, Film, Shield, Medal, Briefcase } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface AspirationalFactorsProps {
  formData: any;
  updateFormData: (data: any) => void;
  updateNestedFormData: (section: string, subsection: string, data: any) => void;
}

const AspirationalFactors: React.FC<AspirationalFactorsProps> = ({
  formData,
  updateFormData,
  updateNestedFormData
}) => {
  const handleServiceChange = (service: string, checked: boolean) => {
    let newServices = [...formData.premiumServices];
    
    if (checked) {
      newServices.push(service);
    } else {
      newServices = newServices.filter(item => item !== service);
    }
    
    updateNestedFormData('', 'premiumServices', newServices);
  };

  return (
    <div className="space-y-8">
      {/* Reward Preferences */}
      <div className="space-y-4">
        <Label className="text-lg font-medium flex items-center gap-2">
          <Star className="h-4 w-4 text-blue-500" />
          Reward Preferences
        </Label>
        <div className="text-sm text-muted-foreground mb-2">
          Rank from 1-5, with 1 being most important to you
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="cashback" className="flex items-center">
                <Star className="h-4 w-4 mr-1 text-blue-500" />
                Cashback on purchases
              </Label>
              <Select
                value={formData.rewardPreferences.cashback.toString()}
                onValueChange={(value) => updateNestedFormData('rewardPreferences', 'cashback', parseInt(value))}
              >
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="Rank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="travelMiles" className="flex items-center">
                <Plane className="h-4 w-4 mr-1 text-blue-500" />
                Travel miles/points
              </Label>
              <Select
                value={formData.rewardPreferences.travelMiles.toString()}
                onValueChange={(value) => updateNestedFormData('rewardPreferences', 'travelMiles', parseInt(value))}
              >
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="Rank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="shoppingDiscounts" className="flex items-center">
                <Gift className="h-4 w-4 mr-1 text-blue-500" />
                Shopping discounts
              </Label>
              <Select
                value={formData.rewardPreferences.shoppingDiscounts.toString()}
                onValueChange={(value) => updateNestedFormData('rewardPreferences', 'shoppingDiscounts', parseInt(value))}
              >
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="Rank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="diningBenefits" className="flex items-center">
                <Utensils className="h-4 w-4 mr-1 text-blue-500" />
                Dining benefits
              </Label>
              <Select
                value={formData.rewardPreferences.diningBenefits.toString()}
                onValueChange={(value) => updateNestedFormData('rewardPreferences', 'diningBenefits', parseInt(value))}
              >
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="Rank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center justify-between">
              <Label htmlFor="entertainmentPerks" className="flex items-center">
                <Film className="h-4 w-4 mr-1 text-blue-500" />
                Entertainment perks
              </Label>
              <Select
                value={formData.rewardPreferences.entertainmentPerks.toString()}
                onValueChange={(value) => updateNestedFormData('rewardPreferences', 'entertainmentPerks', parseInt(value))}
              >
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="Rank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Services */}
      <div className="space-y-4 pt-4 border-t">
        <Label className="text-lg font-medium flex items-center gap-2">
          <Medal className="h-4 w-4 text-blue-500" />
          Premium Services
        </Label>
        <div className="text-sm text-muted-foreground mb-2">
          Select all premium services that would enhance your lifestyle
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="airportLounge"
                checked={formData.premiumServices.includes('airportLounge')}
                onCheckedChange={(checked) => {
                  handleServiceChange('airportLounge', checked === true);
                }}
              />
              <label
                htmlFor="airportLounge"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <Plane className="h-4 w-4 mr-1 text-blue-500" />
                Airport lounge access
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="concierge"
                checked={formData.premiumServices.includes('concierge')}
                onCheckedChange={(checked) => {
                  handleServiceChange('concierge', checked === true);
                }}
              />
              <label
                htmlFor="concierge"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <Briefcase className="h-4 w-4 mr-1 text-blue-500" />
                Concierge services
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="priorityCheckIn"
                checked={formData.premiumServices.includes('priorityCheckIn')}
                onCheckedChange={(checked) => {
                  handleServiceChange('priorityCheckIn', checked === true);
                }}
              />
              <label
                htmlFor="priorityCheckIn"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <Plane className="h-4 w-4 mr-1 text-blue-500" />
                Priority check-in at hotels/airports
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="exclusiveEvents"
                checked={formData.premiumServices.includes('exclusiveEvents')}
                onCheckedChange={(checked) => {
                  handleServiceChange('exclusiveEvents', checked === true);
                }}
              />
              <label
                htmlFor="exclusiveEvents"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <Star className="h-4 w-4 mr-1 text-blue-500" />
                Exclusive event access
              </label>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="chauffeur"
                checked={formData.premiumServices.includes('chauffeur')}
                onCheckedChange={(checked) => {
                  handleServiceChange('chauffeur', checked === true);
                }}
              />
              <label
                htmlFor="chauffeur"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <Car className="h-4 w-4 mr-1 text-blue-500" />
                Chauffeur services
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="extendedWarranty"
                checked={formData.premiumServices.includes('extendedWarranty')}
                onCheckedChange={(checked) => {
                  handleServiceChange('extendedWarranty', checked === true);
                }}
              />
              <label
                htmlFor="extendedWarranty"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <Shield className="h-4 w-4 mr-1 text-blue-500" />
                Extended warranty on purchases
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="purchaseProtection"
                checked={formData.premiumServices.includes('purchaseProtection')}
                onCheckedChange={(checked) => {
                  handleServiceChange('purchaseProtection', checked === true);
                }}
              />
              <label
                htmlFor="purchaseProtection"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <Shield className="h-4 w-4 mr-1 text-blue-500" />
                Purchase protection insurance
              </label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="emergencyAssistance"
                checked={formData.premiumServices.includes('emergencyAssistance')}
                onCheckedChange={(checked) => {
                  handleServiceChange('emergencyAssistance', checked === true);
                }}
              />
              <label
                htmlFor="emergencyAssistance"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center"
              >
                <Shield className="h-4 w-4 mr-1 text-blue-500" />
                Emergency assistance services
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Tolerance */}
      <div className="space-y-4 pt-4 border-t">
        <Label className="text-lg font-medium flex items-center gap-2">
          <Medal className="h-4 w-4 text-blue-500" />
          Fee Tolerance
        </Label>
        
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="maximumFee">Maximum annual fee you would consider (₹)</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
              <Input
                type="number"
                id="maximumFee"
                value={formData.feeTolerances.maximumAnnualFee}
                onChange={(e) => updateNestedFormData('feeTolerances', 'maximumAnnualFee', parseInt(e.target.value) || 0)}
                className="pl-8"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="justifyingFeatures">Features that would justify a higher annual fee</Label>
            <Textarea
              id="justifyingFeatures"
              placeholder="e.g., Higher cashback, Premium travel benefits"
              value={formData.feeTolerances.justifyingFeatures}
              onChange={(e) => updateNestedFormData('feeTolerances', 'justifyingFeatures', e.target.value)}
              className="resize-none"
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="minimumReward">Minimum value of rewards needed to justify fees (₹)</Label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
              <Input
                type="number"
                id="minimumReward"
                value={formData.feeTolerances.minimumRewardValue}
                onChange={(e) => updateNestedFormData('feeTolerances', 'minimumRewardValue', parseInt(e.target.value) || 0)}
                className="pl-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Card Status Importance */}
      <div className="space-y-4 pt-4 border-t">
        <Label className="text-lg font-medium flex items-center gap-2">
          <Medal className="h-4 w-4 text-blue-500" />
          Card Status/Prestige Importance
        </Label>
        
        <RadioGroup 
          value={formData.prestigeImportance}
          onValueChange={(value) => updateNestedFormData('', 'prestigeImportance', value)}
          className="grid gap-3 pt-2"
        >
          <Label
            htmlFor="notImportant"
            className="flex flex-col space-y-1 border rounded-lg p-4 cursor-pointer hover:bg-muted transition-colors"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="notImportant" id="notImportant" />
              <span className="font-medium">Not important at all</span>
            </div>
            <span className="text-sm text-muted-foreground pl-6">
              I'm only interested in the practical benefits
            </span>
          </Label>
          
          <Label
            htmlFor="somewhat"
            className="flex flex-col space-y-1 border rounded-lg p-4 cursor-pointer hover:bg-muted transition-colors"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="somewhat" id="somewhat" />
              <span className="font-medium">Somewhat important</span>
            </div>
            <span className="text-sm text-muted-foreground pl-6">
              Nice to have but not my primary concern
            </span>
          </Label>
          
          <Label
            htmlFor="veryImportant"
            className="flex flex-col space-y-1 border rounded-lg p-4 cursor-pointer hover:bg-muted transition-colors"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="veryImportant" id="veryImportant" />
              <span className="font-medium">Very important</span>
            </div>
            <span className="text-sm text-muted-foreground pl-6">
              It's a significant factor in my decision
            </span>
          </Label>
          
          <Label
            htmlFor="essential"
            className="flex flex-col space-y-1 border rounded-lg p-4 cursor-pointer hover:bg-muted transition-colors"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="essential" id="essential" />
              <span className="font-medium">Essential</span>
            </div>
            <span className="text-sm text-muted-foreground pl-6">
              Status and prestige are top priorities for me
            </span>
          </Label>
        </RadioGroup>
      </div>
    </div>
  );
};

export default AspirationalFactors;
