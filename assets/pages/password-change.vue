<template>
    <div>
        <FlashMessage></FlashMessage>
        <div class="row">
            <div class="col-sm-8 offset-sm-2">
                <h4>Change your password</h4>
               <p v-if="errors.length" style="color: red">
                    <ul style="list-style-type: none">
                         <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
                    </ul>
               </p>
                <form class="form-group border shadow p-4" action="/api/user/changepass" method="POST">
                    <input type="hidden" name="username" v-model="username">
                    <div class="row mb-3">
                        <div class="col-sm-2 form-label col-form-label">
                            <label for="pass1">Contrase&ntilde;a</label>
                        </div>
                        <div class="col-sm-10">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                v-model="pass1"
                                class="form-control"
                            />
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-sm-2 form-label col-form-label">
                            <label for="pass2">Reingrese</label>
                        </div>
                        <div class="col-sm-10">
                            <input
                                type="password"
                                name="pass2"
                                id="pass2"
                                v-model="pass2"
                                class="form-control"
                            />
                        </div>
                    </div>
                    <div class="row">
                         <div class="col-sm-3 offset-sm-9">
                              <button 
                                   type="submit" class="btn btn-primary" 
                                   @click.prevent="save"
                              >
                                   Grabar
                              </button>
                              <a href="/" class="btn btn-secondary">Regresar</a>
                         </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {cambiaContrasena} from '@/services/user-service'
export default {
    name: 'ChangePassword',
    data() {
        return {
            pass1: null,
            pass2: null,
            username: window.userName,
            errors: [],
            passwordVerified: false,
        };
    },
    methods: {
        async save() {
             this.errors = []
            if (this.pass1 != this.pass2) {
                this.errors.push('Las contraseñas no coinciden');
                this.passwordVerified = false;
                return;
            }
            this.passwordVerified = true;

            const response = await cambiaContrasena(this.username, this.pass1)
            if (response.status === 200){
               this.flashMessage.success({
                    title: 'Exito',
                    message: 'Contraseña actualizada correctamente!',
                    time: 2000,
                    position: 'top right'
               });
            } else {
               this.flashMessage.error({
                    title: 'Error',
                    message: 'No se pudo actualizar la constraseña!',
                    time: 2000,
                    position: 'top right'
               });
            }
            console.log(response)
        },
    },
};
</script>
