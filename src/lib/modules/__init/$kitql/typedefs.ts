import { gql } from '@kitql/all-in'

export const typeDefs = gql`
" Get infos about the version "
type Version {
	" Date of the last release "
	releaseCreatedAtUtc: DateTime!
}

"Our loved graphql Mutation root"
type Mutation {
	_boostServer: String
	_generateError: String
}

" Our loved graphql Query root "
type Query {
	version: Version!
}

" scalar for the Date xx/xx/xxxx "
scalar Date

" scalar for the DateTime xx/xx/xxxxTxx:xx:xx.xxxz "
scalar DateTime

type Subscription {
	countdown(from: Int!): Int!
}

`;