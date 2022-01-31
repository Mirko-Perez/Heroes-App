import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { PrivateRoute } from "../../routers/PrivateRoute";




describe('Pruebas en el <PrivateRoute />', () => {
  
    Storage.prototype.setItem = jest.fn()

    test('Debe de mostrar el componente si esta autenticado y guardarlo en el localstore', () => {
      
        const contextValue = {
            user: {
                logged: true,
                name:'pepe'
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoute>
                        <h1>Private Component</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(wrapper.find('h1').text().trim()).toBe('Private Component')
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath','/')
    });

    
    
    
});
