import { QueryBuilderReturnMethods, SelfReferenceQueryBuilderMethods } from "../type/typeorm.types";

export const selfReferenceQueryBuilderMethods: SelfReferenceQueryBuilderMethods[] = [
  "addCommonTableExpression",
  "addFrom",
  "addGroupBy",
  "addOrderBy",
  "addSelect",
  "andHaving",
  "andWhere",
  "andWhereExists",
  "andWhereInIds",
  "cache",
  "callListeners",
  "clone",
  "comment",
  "disableEscaping",
  "distinct",
  "distinctOn",
  "from",
  "fromDummy",
  "groupBy",
  "having",
  "innerJoin",
  "innerJoinAndMapMany",
  "innerJoinAndMapOne",
  "innerJoinAndSelect",
  "leftJoin",
  "leftJoinAndMapMany",
  "leftJoinAndMapOne",
  "leftJoinAndSelect",
  "limit",
  "loadAllRelationIds",
  "loadRelationCountAndMap",
  "loadRelationIdAndMap",
  "maxExecutionTime",
  "offset",
  "orHaving",
  "orWhere",
  "orWhereExists",
  "orWhereInIds",
  "orderBy",
  "printSql",
  "select",
  "setFindOptions",
  "setLock",
  "setNativeParameters",
  "setOnLocked",
  "setOption",
  "setParameter",
  "setParameters",
  "setQueryRunner",
  "skip",
  "subQuery",
  "take",
  "timeTravelQuery",
  "useIndex",
  "useTransaction",
  "where",
  "whereExists",
  "whereInIds",
  "withDeleted",
];

export const queryBuilderReturnMethods: QueryBuilderReturnMethods[] = [
  "execute",
  "getCount",
  "getExists",
  "getMany",
  "getManyAndCount",
  "getOne",
  "getOneOrFail",
  "getRawAndEntities",
  "getRawMany",
  "getRawOne",
  "stream",
];