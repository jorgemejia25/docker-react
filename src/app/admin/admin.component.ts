import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormBuilder, Validators } from '@angular/forms';

import { Invitacion } from '../interfaces/Invitacion';
import { InvitacionService } from '../shared/invitacion.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class AdminComponent implements OnInit {
  showCreateDialog: boolean = false;
  showEditDialog: boolean = false;
  selectedInvitado!: Partial<Invitacion>;

  createForm = this.fb.group({
    nombre: ['', [Validators.required]],
    invitaciones: [1, [Validators.required, Validators.min(1)]],
    confirmados: [0],
    estado: ['Pendiente', Validators.required],
  });

  editForm = this.fb.group({
    nombre: ['', [Validators.required]],
    invitaciones: [1, [Validators.required, Validators.min(1)]],
    confirmados: [0],
    estado: ['Pendiente', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    public invitacionService: InvitacionService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.invitacionService.findAll();
  }

  openEditDialog(invitado: Partial<Invitacion>) {
    this.selectedInvitado = invitado;
    this.showEditDialog = true;

    this.editForm.patchValue({
      ...invitado,
    });
  }

  createSubmit() {
    if (this.createForm.invalid) return this.createForm.markAllAsTouched();

    console.log('sended');

    this.invitacionService
      .create(this.createForm.value as any)
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Invitación creada',
          detail: 'La invitación ha sido creada con éxito',
        });

        this.showCreateDialog = false;
      })
      .catch(() => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error al crear invitación',
          detail: 'Ha ocurrido un error al crear la invitación',
        });
      });
  }

  editSubmit() {
    if (this.editForm.invalid) return this.editForm.markAllAsTouched();

    this.invitacionService
      .update({ ...(this.editForm.value as any), id: this.selectedInvitado.id })
      .then(() => {
        this.messageService.add({
          severity: 'success',
          summary: 'Invitación editada',
          detail: 'La invitación ha sido editada con éxito',
        });

        this.showEditDialog = false;
      })
      .catch(() => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error al editar invitación',
          detail: 'Ha ocurrido un error al editar la invitación',
        });
      });
  }

  copyToClipboard(text: string) {
    navigator.clipboard.writeText(text);

    this.messageService.add({
      severity: 'success',
      summary: 'Copiado al portapapeles',
      detail: 'El link de la invitación ha sido copiado al portapapeles',
    });
  }

  deleteInvitacion(invitacion: Invitacion, event: any) {
    this.confirmationService.confirm({
      target: event.target,
      message: `¿Estás seguro de eliminar la invitación de ${invitacion.nombre}?`,
      accept: () => {
        this.invitacionService.delete(invitacion.id).then(() => {
          this.messageService.add({
            severity: 'success',
            summary: 'Invitación eliminada',
            detail: 'La invitación ha sido eliminada con éxito',
          });
        });
      },
    });
  }
}
