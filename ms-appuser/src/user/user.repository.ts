import { Repository, EntityRepository, Entity, getCustomRepository } from "typeorm";
import { User } from "src/models/entities/user.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { DataSource } from 'typeorm';

export const UserRepository = [
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['DATA_SOURCE'],
  },
];