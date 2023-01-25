import type * as Types from "$graphql/$kitql/graphqlTypes";
import type { gm } from '@kitql/all-in';
export namespace __InitModule {
  interface DefinedFields {
    Version: 'releaseCreatedAtUtc';
    Mutation: '_boostServer' | '_generateError';
    Query: 'version';
    Subscription: 'countdown';
  };
  
  export type Version = Pick<Types.Version, DefinedFields['Version']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Subscription = Pick<Types.Subscription, DefinedFields['Subscription']>;
  
  export type Scalars = Pick<Types.Scalars, 'Date' | 'DateTime'>;
  export type DateScalarConfig = Types.DateScalarConfig;
  export type DateTimeScalarConfig = Types.DateTimeScalarConfig;
  
  export type VersionResolvers = Pick<Types.VersionResolvers, DefinedFields['Version'] | '__isTypeOf'>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type SubscriptionResolvers = Pick<Types.SubscriptionResolvers, DefinedFields['Subscription']>;
  
  export interface Resolvers {
    Version?: VersionResolvers;
    Mutation?: MutationResolvers;
    Query?: QueryResolvers;
    Subscription?: SubscriptionResolvers;
    Date?: Types.Resolvers['Date'];
    DateTime?: Types.Resolvers['DateTime'];
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Version?: {
      '*'?: gm.Middleware[];
      releaseCreatedAtUtc?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      _boostServer?: gm.Middleware[];
      _generateError?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      version?: gm.Middleware[];
    };
    Subscription?: {
      '*'?: gm.Middleware[];
      countdown?: gm.Middleware[];
    };
  };
}