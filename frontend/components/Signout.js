import React, {Component} from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import {CURRENT_USER_QUERY} from './User';

const SINGOUT_MUTATION = gql`
  mutation SINGOUT_MUTATION {
    signout {
      message
    }
  }
`

const Signout = prop => (
  <Mutation
  mutation={SINGOUT_MUTATION}
  refetchQueries={[
    {query: CURRENT_USER_QUERY}
  ]}
  >
    {(singout)=>(
    <button
    onClick={
      singout
    }
    >Sign Out</button>
    )}
  </Mutation>
)
export default Signout;
