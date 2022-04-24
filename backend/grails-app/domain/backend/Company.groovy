package backend

import grails.rest.Resource

@Resource(uri= '/company' , formats=['json', 'xml'])
class Company {
    
    String name;
    String segment;

    

    static constraints = {
         name(blank:false)
         segment(blank:false)
    }

}
