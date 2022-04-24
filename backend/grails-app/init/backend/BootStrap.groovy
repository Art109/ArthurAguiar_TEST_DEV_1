package backend

import groovy.transform.CompileStatic

class BootStrap {

    
    
    CompanyService companyService

    def init = { servletContext ->

            
        new Company(name: 'Nintendo', segment: 'Games').save()
        new Company(name: 'Eletronic Arts', segment: 'Distribuidora').save()
        new Company(name: 'Capcom', segment: 'Games').save()
       

        
    }
    def destroy = {
    }
}
