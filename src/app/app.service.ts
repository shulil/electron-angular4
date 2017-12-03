import {Injectable} from "@angular/core"

@Injectable()
export class AppService {
    info :{} = {
        serverName: "",
        locationIdentifier :"",
        firstHost: {
            hypervisor: "",
            hostName: "",
            port: "",
            userName: "",
            passoerd: "",
        },
        firstStorageDes: {
            type: "",
            location:""

        },
        operationModes: {
            type: "",
            Storagedestination:{
                
            },
            hostdatastore:{}

        }

    }

  getData() {
    return this.info;
  }
}