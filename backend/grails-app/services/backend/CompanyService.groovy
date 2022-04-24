package backend

import grails.gorm.services.Query

import grails.gorm.services.Service

@Service(Company)
interface CompanyService {

    List<Company>getCompany()
    
}
