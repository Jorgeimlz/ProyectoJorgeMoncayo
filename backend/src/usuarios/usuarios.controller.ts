import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  crear(@Body() usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.crear(usuario);
  }

  @Get()
  encontrarTodos(): Promise<Usuario[]> {
    return this.usuariosService.encontrarTodos();
  }

  @Get(':id')
  encontrarUno(@Param('id') id: string): Promise<Usuario> {
    return this.usuariosService.encontrarUno(+id);
  }

  @Put(':id')
  actualizar(@Param('id') id: string, @Body() usuario: Partial<Usuario>): Promise<Usuario> {
    return this.usuariosService.actualizar(+id, usuario);
  }

  @Delete(':id')
  eliminar(@Param('id') id: string): Promise<void> {
    return this.usuariosService.eliminar(+id);
  }
}
