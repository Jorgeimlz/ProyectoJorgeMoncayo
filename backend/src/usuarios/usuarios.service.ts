import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  crear(usuario: Partial<Usuario>): Promise<Usuario> {
    const nuevoUsuario = this.usuariosRepository.create(usuario);
    return this.usuariosRepository.save(nuevoUsuario);
  }

  encontrarTodos(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }

  encontrarUno(id: number): Promise<Usuario> {
    return this.usuariosRepository.findOne({ where: { id } });
  }

  async actualizar(id: number, usuario: Partial<Usuario>): Promise<Usuario> {
    await this.usuariosRepository.update(id, usuario);
    return this.encontrarUno(id);
  }

  eliminar(id: number): Promise<void> {
    return this.usuariosRepository.delete(id).then(() => undefined);
  }
}
