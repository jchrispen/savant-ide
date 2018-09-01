import { Account } from '../store/blockchain/types';
import { DeploymentResult, KVPair } from '../store/contract/types';
/**
 * Action dispatchers
 */
export type Deployer = (
  code: string,
  initParams: KVPair[],
  msgParams: { [key: string]: string },
  deployer: Account,
  resultCb: (result: DeploymentResult) => void,
) => void;
