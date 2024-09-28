import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { Usuario } from './usuarios/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'familia4',
      database: 'ProyectoJorgeMoncayo',
      entities: [Usuario],
      synchronize: true,
    }),
    UsuariosModule,
  ],
})
export class AppModule {}
