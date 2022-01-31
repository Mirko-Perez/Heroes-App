import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../auth/authContext";
import { Navbar } from "../../../components/ui/NavBar";
import { types } from "../../../types/types";


describe('Preubas en el <NavBar />', () => {
  
    test('Debe de mostarse correctamente', () => {
      
        const contextValue={
            type:types.login,
            user:{
                name:'Pedro'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
            )

        expect(wrapper.find('.text-info').text().trim()).toBe('Pedro')
        expect(wrapper).toMatchSnapshot();

    });

   
    
    
});
