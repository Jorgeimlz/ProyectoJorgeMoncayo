import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { Usuario } from './usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario])], // Importa el TypeOrmModule y registra la entidad Usuario
  providers: [UsuariosService],
  controllers: [UsuariosController],
})
export class UsuariosModule {}
