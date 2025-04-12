
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LearningCenterContent from '@/components/learning-center/LearningCenterContent';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { HomeIcon } from 'lucide-react';

const LearningCenter = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">
                  <HomeIcon className="h-4 w-4 mr-1" />
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/learning-center">Learning Center</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-cardwise-blue-500 mb-2">Credit Card Knowledge Center</h1>
            <p className="text-muted-foreground text-lg">
              Learn everything you need to know about credit cards, from basics to advanced strategies.
            </p>
          </div>

          <LearningCenterContent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearningCenter;
