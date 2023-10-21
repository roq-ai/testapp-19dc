interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Administrator', 'Team Member', 'Collaborator'],
  tenantName: 'Team',
  applicationName: 'testapp',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View user information', 'View team information'],
  ownerAbilities: [
    'Manage user information',
    'Manage team information',
    'Create and manage relationships between users and teams',
    'Manage tenant information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/a9013511-d853-4dc5-a61b-8c0b1dcdf4f2',
};
