/** This file was generated by Nexus Schema Do not make changes to this file directly */

import * as t from './typeDefs'

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {}

export interface NexusGenEnums {
  PatchSize: 'LARGE' | 'SMALL'
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Launch: t.Launch
  LaunchConnection: {
    // root type
    cursor?: string | null // String
    hasMore?: boolean | null // Boolean
    launches?: Array<NexusGenRootTypes['Launch'] | null> | null // [Launch]
  }
  Mission: t.Mission
  Mutation: {}
  Query: {}
  Rocket: t.Rocket
  TripUpdateResponse: {
    // root type
    launches?: Array<NexusGenRootTypes['Launch'] | null> | null // [Launch]
    message?: string | null // String
    success?: boolean | null // Boolean
  }
  User: {
    // root type
    email?: string | null // String
    id?: string | null // ID
  }
}

export interface NexusGenInterfaces {}

export interface NexusGenUnions {}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Launch: {
    // field return type
    id: string | null // ID
    isBooked: boolean | null // Boolean
    mission: NexusGenRootTypes['Mission'] | null // Mission
    rocket: NexusGenRootTypes['Rocket'] | null // Rocket
    site: string | null // String
  }
  LaunchConnection: {
    // field return type
    cursor: string | null // String
    hasMore: boolean | null // Boolean
    launches: Array<NexusGenRootTypes['Launch'] | null> | null // [Launch]
  }
  Mission: {
    // field return type
    missionPatch: string | null // String
    name: string | null // String
  }
  Mutation: {
    // field return type
    bookTrips: NexusGenRootTypes['TripUpdateResponse'] | null // TripUpdateResponse
    cancelTrip: NexusGenRootTypes['TripUpdateResponse'] | null // TripUpdateResponse
    login: string | null // String
  }
  Query: {
    // field return type
    launch: NexusGenRootTypes['Launch'] | null // Launch
    launches: NexusGenRootTypes['LaunchConnection'] | null // LaunchConnection
    me: NexusGenRootTypes['User'] | null // User
  }
  Rocket: {
    // field return type
    id: string | null // ID
    name: string | null // String
    type: string | null // String
  }
  TripUpdateResponse: {
    // field return type
    launches: Array<NexusGenRootTypes['Launch'] | null> | null // [Launch]
    message: string | null // String
    success: boolean | null // Boolean
  }
  User: {
    // field return type
    email: string | null // String
    id: string | null // ID
    trips: Array<NexusGenRootTypes['Launch'] | null> | null // [Launch]
  }
}

export interface NexusGenFieldTypeNames {
  Launch: {
    // field return type name
    id: 'ID'
    isBooked: 'Boolean'
    mission: 'Mission'
    rocket: 'Rocket'
    site: 'String'
  }
  LaunchConnection: {
    // field return type name
    cursor: 'String'
    hasMore: 'Boolean'
    launches: 'Launch'
  }
  Mission: {
    // field return type name
    missionPatch: 'String'
    name: 'String'
  }
  Mutation: {
    // field return type name
    bookTrips: 'TripUpdateResponse'
    cancelTrip: 'TripUpdateResponse'
    login: 'String'
  }
  Query: {
    // field return type name
    launch: 'Launch'
    launches: 'LaunchConnection'
    me: 'User'
  }
  Rocket: {
    // field return type name
    id: 'ID'
    name: 'String'
    type: 'String'
  }
  TripUpdateResponse: {
    // field return type name
    launches: 'Launch'
    message: 'String'
    success: 'Boolean'
  }
  User: {
    // field return type name
    email: 'String'
    id: 'ID'
    trips: 'Launch'
  }
}

export interface NexusGenArgTypes {
  Mission: {
    missionPatch: {
      // args
      size?: NexusGenEnums['PatchSize'] | null // PatchSize
    }
  }
  Mutation: {
    bookTrips: {
      // args
      launchIds: string[] // [ID!]!
    }
    cancelTrip: {
      // args
      launchId: string // ID!
    }
    login: {
      // args
      email?: string | null // String
    }
  }
  Query: {
    launch: {
      // args
      count?: number | null // Int
      id: string // ID!
    }
    launches: {
      // args
      after?: string | null // String
      pageSize?: number | null // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {}

export interface NexusGenTypeInterfaces {}

export type NexusGenObjectNames = keyof NexusGenObjects

export type NexusGenInputNames = never

export type NexusGenEnumNames = keyof NexusGenEnums

export type NexusGenInterfaceNames = never

export type NexusGenScalarNames = keyof NexusGenScalars

export type NexusGenUnionNames = never

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never

export type NexusGenAbstractsUsingStrategyResolveType = never

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: t.Context
  inputTypes: NexusGenInputs
  rootTypes: NexusGenRootTypes
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars
  argTypes: NexusGenArgTypes
  fieldTypes: NexusGenFieldTypes
  fieldTypeNames: NexusGenFieldTypeNames
  allTypes: NexusGenAllTypes
  typeInterfaces: NexusGenTypeInterfaces
  objectNames: NexusGenObjectNames
  inputNames: NexusGenInputNames
  enumNames: NexusGenEnumNames
  interfaceNames: NexusGenInterfaceNames
  scalarNames: NexusGenScalarNames
  unionNames: NexusGenUnionNames
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames']
  allOutputTypes:
    | NexusGenTypes['objectNames']
    | NexusGenTypes['enumNames']
    | NexusGenTypes['unionNames']
    | NexusGenTypes['interfaceNames']
    | NexusGenTypes['scalarNames']
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames']
  abstractTypeMembers: NexusGenAbstractTypeMembers
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType
  features: NexusGenFeaturesConfig
}

declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {}
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {}
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {}
  interface NexusGenPluginSchemaConfig {}
  interface NexusGenPluginArgConfig {}
}
