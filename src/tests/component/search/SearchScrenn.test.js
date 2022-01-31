import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScrenn";

const mockNavigate=jest.fn()


jest.mock('react-router-dom',()=>({
  ...jest.requireActual('react-router-dom'),
  useNavigate:()=>mockNavigate
}));


describe('Pruebas en el componente <SearchScrenn />', () => {
  
    test('Debe de mostrarse correctamente con valores por defecto', () => {
      
      const wrapper = mount(
      
      <MemoryRouter initialEntries={['/search']}>
        <SearchScreen />
      </MemoryRouter>
      
      );
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('.alert-info').text().trim()).toBe('Buscar un Héroe')

    });

    test('Debe de mostrar a Batman y el input con el valor queryString', () => {

      const wrapper = mount(
      
        <MemoryRouter initialEntries={['/search?q=batman']}>
          <SearchScreen />
        </MemoryRouter>
      );
      expect(wrapper.find('input').prop('value')).toBe('batman')

      
    });

    test('Debe de mostrar un error si el query no existe', () => {
      
      const wrapper = mount(
      
        <MemoryRouter initialEntries={['/search?q=batman123']}>
          <SearchScreen />
        </MemoryRouter>
      );
      expect(wrapper.find('.alert-danger').text().trim()).toBe('No hay resultados con: batman123')

    });
    
    test('Debe de llamar el navigate a el nuevo url', () => {
      
      const wrapper = mount(
      
        <MemoryRouter initialEntries={['/search']}>
          <SearchScreen />
        </MemoryRouter>
      );
      
      wrapper.find('input').simulate('change',{
        target:{
          name:'searchText',
          value:'Batman'
        }

      })

      wrapper.find('form').prop('onSubmit')({
        preventDefault(){}
      })

      expect(mockNavigate).toHaveBeenCalled()


    });
    
    
    
});

