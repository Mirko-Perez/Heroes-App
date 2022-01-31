import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { DashboardRoute } from "../../routers/DashboardRoute";


describe('Pruebas en el <DashboardRoute />', () => {
    
    const contextValue ={
        user:{
            logged:true,
            name:'Juan'
        }
    }

    test('Debe de mostrarse correctamente - Marvel', () => {
      const wrapper = mount( 
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <DashboardRoute  />
            </MemoryRouter>
        </AuthContext.Provider>)

      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('.text-info').text().trim()).toBe('Juan')
    });

    test('Debe de mostrarse correctamente - DC', () => {
        const wrapper = mount( 
          <AuthContext.Provider value={contextValue}>
              <MemoryRouter initialEntries={['/dc']}>
                  <DashboardRoute  />
              </MemoryRouter>
          </AuthContext.Provider>)
  
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('DCScreens')
        
    });
    
});
