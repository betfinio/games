import type { TreeMember } from '@/lib/types';
import type { Address } from 'viem';
export declare const useTreeMember: (address: Address) => import("@tanstack/react-query").UseQueryResult<TreeMember, Error>;
export declare const useInviteStakingVolume: (member: Address) => import("@tanstack/react-query").UseQueryResult<bigint, Error>;
export declare const useInviteBettingVolume: (member: Address) => import("@tanstack/react-query").UseQueryResult<bigint, Error>;
