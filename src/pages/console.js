import React from 'react';
import Layout from '../components/Layout/Layout';
import Console from '../components/Console/Console';

const ConsolePage = () => {
  return (
    <Layout>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Interactive Console</h1>
        <p className="text-center mb-8">
          Try out some commands to learn more about my skills and projects.
          Type "help" to see available commands.
        </p>
        <Console />
      </div>
    </Layout>
  );
};

export default ConsolePage;