
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ChevronRight, BookOpen, Award, TrendingUp, Calculator, BarChart4, CreditCard, Lightbulb, Percent } from 'lucide-react';
import ArticleCard from './ArticleCard';
import { articlesData } from './articlesData';

const LearningCenterContent = () => {
  const [activeTab, setActiveTab] = useState('topics');

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Sidebar with categories */}
      <div className="lg:col-span-3">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-2">
              {['Credit Card Basics', 'Credit Reports & Scores', 'Rewards Maximization', 'Bonus Strategies', 'Advanced Techniques', 'Financial Planning'].map((category) => (
                <Button 
                  key={category} 
                  variant="ghost" 
                  className="w-full justify-start text-left font-normal hover:bg-cardwise-teal-50"
                >
                  {category}
                  <ChevronRight className="ml-auto h-4 w-4" />
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main content */}
      <div className="lg:col-span-9">
        <Tabs defaultValue="topics" className="mb-6">
          <TabsList>
            <TabsTrigger value="topics">Featured Topics</TabsTrigger>
            <TabsTrigger value="articles">Latest Articles</TabsTrigger>
            <TabsTrigger value="guides">Step-by-Step Guides</TabsTrigger>
            <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
          </TabsList>
          
          <TabsContent value="topics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <FeaturedTopicCard 
                icon={<BookOpen className="h-6 w-6 text-cardwise-teal-500" />}
                title="Understanding Credit Reports" 
                description="Learn how to read your credit report, what factors influence it, and how to maintain a healthy credit history."
              />
              <FeaturedTopicCard 
                icon={<Award className="h-6 w-6 text-cardwise-teal-500" />}
                title="Maximizing Sign-up Bonuses" 
                description="Strategies to qualify for and maximize the value of credit card sign-up bonuses and welcome offers."
              />
              <FeaturedTopicCard 
                icon={<BarChart4 className="h-6 w-6 text-cardwise-teal-500" />}
                title="Understanding Credit Scores" 
                description="How credit scores are calculated, what factors affect them, and strategies to improve your score."
              />
              <FeaturedTopicCard 
                icon={<TrendingUp className="h-6 w-6 text-cardwise-teal-500" />}
                title="Advanced Card Strategies" 
                description="Expert techniques for maximizing rewards, optimizing multiple cards, and leveraging card benefits."
              />
            </div>

            <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
            <Accordion type="single" collapsible className="mb-8">
              <AccordionItem value="item-1">
                <AccordionTrigger>What factors impact my credit score the most?</AccordionTrigger>
                <AccordionContent>
                  The most significant factors affecting your credit score are payment history (35%), credit utilization (30%), length of credit history (15%), new credit inquiries (10%), and credit mix (10%). Making on-time payments and keeping your credit utilization ratio below 30% will have the biggest positive impact.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How can I maximize credit card rewards?</AccordionTrigger>
                <AccordionContent>
                  To maximize rewards, choose cards that align with your spending patterns, use category bonuses strategically, pay attention to rotating categories, take advantage of shopping portals, and use welcome bonuses. Always pay your balance in full to avoid interest charges that would negate the value of rewards.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How many credit cards should I have?</AccordionTrigger>
                <AccordionContent>
                  The ideal number of credit cards varies based on your financial situation and ability to manage accounts. Having 2-5 cards is generally considered reasonable for most people. More important than the number is using them responsibly, keeping utilization low, and paying on time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Will closing unused credit cards help my credit score?</AccordionTrigger>
                <AccordionContent>
                  Generally, closing unused credit cards can hurt your credit score in two ways: it reduces your overall available credit (potentially increasing utilization ratio) and it may shorten your average credit history length. Unless the card has an annual fee, it's often better to keep it open and use it occasionally.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What's the best strategy for paying off credit card debt?</AccordionTrigger>
                <AccordionContent>
                  The two most effective strategies are the avalanche method (paying off highest interest rate debt first) and the snowball method (paying off smallest balances first). The avalanche method saves the most money, while the snowball method can provide psychological wins. Consider balance transfer cards with 0% intro APR offers to reduce interest during repayment.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          
          <TabsContent value="articles">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articlesData.map((article, index) => (
                <ArticleCard key={index} article={article} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="guides">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GuideCard 
                icon={<Calculator className="h-5 w-5" />}
                title="How to Calculate Your Credit Utilization"
                steps={[
                  "Add up all your credit card balances",
                  "Add up all your credit limits",
                  "Divide your total balance by your total limit",
                  "Multiply by 100 to get your utilization percentage",
                  "Aim to keep this number below 30%"
                ]}
              />
              <GuideCard 
                icon={<CreditCard className="h-5 w-5" />}
                title="Maximizing Credit Card Sign-up Bonuses"
                steps={[
                  "Research current bonus offers across different cards",
                  "Understand minimum spending requirements and timeframes",
                  "Create a spending plan to meet requirements without overspending",
                  "Track progress toward spending goals",
                  "Consider timing applications with large planned purchases"
                ]}
              />
              <GuideCard 
                icon={<Lightbulb className="h-5 w-5" />}
                title="Building Credit From Scratch"
                steps={[
                  "Start with a secured credit card or become an authorized user",
                  "Make small purchases and pay them off in full each month",
                  "Never miss a payment date",
                  "Keep your utilization below 30%",
                  "After 6-12 months, apply for an unsecured card"
                ]}
              />
              <GuideCard 
                icon={<Percent className="h-5 w-5" />}
                title="Understanding APR and Interest Calculations"
                steps={[
                  "Learn what APR means for your specific card",
                  "Calculate daily periodic rate (APR ÷ 365)",
                  "Understand how interest compounds on unpaid balances",
                  "Learn about grace periods and how to avoid interest charges",
                  "Compare APRs when choosing between different cards"
                ]}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="videos">
            <div className="text-center py-12">
              <h3 className="text-xl mb-4">Video Tutorials Coming Soon!</h3>
              <p className="text-muted-foreground">
                We're working on creating helpful video tutorials about credit card topics.
                <br />Check back soon for engaging video content!
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const FeaturedTopicCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <Card className="overflow-hidden border-l-4 border-l-cardwise-teal-500">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="mt-1 bg-cardwise-mint-50 p-2 rounded-full">
            {icon}
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2">{title}</h3>
            <p className="text-muted-foreground text-sm">{description}</p>
            <Button variant="link" className="p-0 h-auto mt-2 text-cardwise-teal-500">
              Learn more <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const GuideCard = ({ icon, title, steps }: { icon: React.ReactNode; title: string; steps: string[] }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-cardwise-blue-50 p-2 rounded-full">
            {icon}
          </div>
          <h3 className="font-medium">{title}</h3>
        </div>
        <ol className="space-y-3 list-decimal list-inside pl-4">
          {steps.map((step, index) => (
            <li key={index} className="text-sm text-muted-foreground">{step}</li>
          ))}
        </ol>
        <Button variant="outline" className="w-full mt-4">View Full Guide</Button>
      </CardContent>
    </Card>
  );
};

export default LearningCenterContent;
