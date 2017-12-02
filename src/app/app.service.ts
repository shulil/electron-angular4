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
            type: ""
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