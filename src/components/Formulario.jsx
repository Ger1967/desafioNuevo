import React from "react";
import { useState } from "react";
import "./style.css";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [edad, setEdad] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [record, setRecord] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const onChangeNombre = (e) => {
    setNombre(e.target.value);
  };

  const onChangeEspecialidad = (e) => {
    setEspecialidad(e.target.value);
  };

  const onChangeEdad = (e) => {
    setEdad(e.target.value);
  };

  const onChangeAltura = (e) => {
    setAltura(e.target.value);
  };

  const onChangePeso = (e) => {
    setPeso(e.target.value);
  };

  const onChangeNacionalidad = (e) => {
    setNacionalidad(e.target.value);
  };

  const onChangeRecord = (e) => {
    setRecord(e.target.value);
  };

  const onChangeDescripcion = (e) => {
    setDescripcion(e.target.value);
  };

  const onSubmitRegistrar = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contenedorForm">
      <form className="formulario" onSubmit={onSubmitRegistrar}>
        <div className="titulo">
          <h2>Nuevo Registro</h2>
        </div>

        <h3>Datos del nuevo deportista:</h3>

        <div className="datos">
          <input
            type="text"
            placeholder="Inserte Nombre y Apellido...*"
            required
            onChange={onChangeNombre}
            className="ancho"
          />

          <select
            name="Especialidad"
            onChange={onChangeEspecialidad}
            className="ancho"
          >
            <option value="especialidad" selected>
              Especialidad
            </option>
            <option value="te">Tenis</option>
            <option value="vo">Volleyball</option>
            <option value="aj">Ajedrez</option>
            <option value="na">Natacion</option>
            <option value="sk">Skate</option>
            <option value="at">Atletismo</option>
            <option value="ot">Otro</option>
          </select>

          <select name="Edad" onChange={onChangeEdad} className="ancho">
            <option value="edad" selected>
              Edad
            </option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
            <option value="56">56</option>
            <option value="57">57</option>
            <option value="58">58</option>
            <option value="59">59</option>
            <option value="60">60</option>
            <option value="61">61</option>
            <option value="62">62</option>
            <option value="63">63</option>
            <option value="64">64</option>
            <option value="65">65</option>
            <option value="66">66</option>
            <option value="67">67</option>
          </select>

          <select name="Altura" onChange={onChangeAltura} className="ancho">
            <option value="altura" selected>
              Altura (m)
            </option>
            <option value="1.10">1.10</option>
            <option value="1.15">1.15</option>
            <option value="1.20">1.20</option>
            <option value="1.25">1.25</option>
            <option value="1.30">1.30</option>
            <option value="1.35">1.35</option>
            <option value="1.40">1.40</option>
            <option value="1.45">1.45</option>
            <option value="1.50">1.50</option>
            <option value="1.55">1.55</option>
            <option value="1.60">1.60</option>
            <option value="1.65">1.65</option>
            <option value="1.70">1.70</option>
            <option value="1.75">1.75</option>
            <option value="1.80">1.80</option>
            <option value="1.85">1.85</option>
            <option value="1.90">1.90</option>
            <option value="1.95">1.95</option>
            <option value="2.00">2.00</option>
            <option value="2.05">2.05</option>
            <option value="2.10">2.10</option>
            <option value="2.15">2.15</option>
          </select>

          <select name="Peso" onChange={onChangePeso} className="ancho">
            <option value="peso" selected>
              Peso (Kg)
            </option>
            <option value="30">30</option>
            <option value="31">31</option>
            <option value="32">32</option>
            <option value="33">33</option>
            <option value="34">34</option>
            <option value="35">35</option>
            <option value="36">36</option>
            <option value="37">37</option>
            <option value="38">38</option>
            <option value="39">39</option>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
            <option value="46">46</option>
            <option value="47">47</option>
            <option value="48">48</option>
            <option value="49">49</option>
            <option value="50">50</option>
            <option value="51">51</option>
            <option value="52">52</option>
            <option value="53">53</option>
            <option value="54">54</option>
            <option value="55">55</option>
            <option value="56">56</option>
            <option value="57">57</option>
            <option value="58">58</option>
            <option value="59">59</option>
            <option value="60">60</option>
            <option value="61">61</option>
            <option value="62">62</option>
            <option value="63">63</option>
            <option value="64">64</option>
            <option value="65">65</option>
            <option value="66">66</option>
            <option value="67">67</option>
            <option value="68">68</option>
            <option value="69">69</option>
            <option value="70">70</option>
            <option value="71">71</option>
            <option value="72">72</option>
            <option value="73">73</option>
            <option value="74">74</option>
            <option value="75">75</option>
            <option value="76">76</option>
            <option value="77">77</option>
            <option value="78">78</option>
            <option value="79">79</option>
            <option value="80">80</option>
            <option value="81">81</option>
            <option value="82">82</option>
            <option value="83">83</option>
            <option value="84">84</option>
            <option value="85">85</option>
            <option value="86">86</option>
            <option value="87">87</option>
            <option value="88">88</option>
            <option value="89">89</option>
            <option value="90">90</option>
            <option value="91">91</option>
            <option value="92">92</option>
            <option value="93">93</option>
            <option value="94">94</option>
            <option value="95">95</option>
            <option value="96">96</option>
            <option value="97">97</option>
            <option value="98">98</option>
            <option value="99">99</option>
            <option value="100">100</option>
            <option value="101">101</option>
            <option value="102">102</option>
            <option value="103">103</option>
            <option value="104">104</option>
            <option value="105">105</option>
            <option value="106">106</option>
            <option value="107">107</option>
            <option value="108">108</option>
            <option value="109">109</option>
            <option value="110">110</option>
            <option value="111">111</option>
            <option value="112">112</option>
            <option value="113">113</option>
            <option value="114">114</option>
            <option value="115">115</option>
            <option value="116">116</option>
            <option value="117">117</option>
            <option value="118">118</option>
            <option value="119">119</option>
            <option value="120">120</option>
          </select>

          <select
            name="nacionalidad"
            onChange={onChangeNacionalidad}
            className="ancho"
          >
            <option value="nacionalidad" selected>
              Nacionalidad
            </option>
            <option value="AF">Afganistán</option>
            <option value="AL">Albania</option>
            <option value="DE">Alemania</option>
            <option value="AD">Andorra</option>
            <option value="AO">Angola</option>
            <option value="AI">Anguilla</option>
            <option value="AQ">Antártida</option>
            <option value="AG">Antigua y Barbuda</option>
            <option value="AN">Antillas Holandesas</option>
            <option value="SA">Arabia Saudí</option>
            <option value="DZ">Argelia</option>
            <option value="AR">Argentina</option>
            <option value="AM">Armenia</option>
            <option value="AW">Aruba</option>
            <option value="AU">Australia</option>
            <option value="AT">Austria</option>
            <option value="AZ">Azerbaiyán</option>
            <option value="BS">Bahamas</option>
            <option value="BH">Bahrein</option>
            <option value="BD">Bangladesh</option>
            <option value="BB">Barbados</option>
            <option value="BE">Bélgica</option>
            <option value="BZ">Belice</option>
            <option value="BJ">Benin</option>
            <option value="BM">Bermudas</option>
            <option value="BY">Bielorrusia</option>
            <option value="MM">Birmania</option>
            <option value="BO">Bolivia</option>
            <option value="BA">Bosnia y Herzegovina</option>
            <option value="BW">Botswana</option>
            <option value="BR">Brasil</option>
            <option value="BN">Brunei</option>
            <option value="BG">Bulgaria</option>
            <option value="BF">Burkina Faso</option>
            <option value="BI">Burundi</option>
            <option value="BT">Bután</option>
            <option value="CV">Cabo Verde</option>
            <option value="KH">Camboya</option>
            <option value="CM">Camerún</option>
            <option value="CA">Canadá</option>
            <option value="TD">Chad</option>
            <option value="CL">Chile</option>
            <option value="CN">China</option>
            <option value="CY">Chipre</option>
            <option value="VA">Ciudad del Vaticano (Santa Sede)</option>
            <option value="CO">Colombia</option>
            <option value="KM">Comores</option>
            <option value="CG">Congo</option>
            <option value="CD">Congo, República Democrática del</option>
            <option value="KR">Corea</option>
            <option value="KP">Corea del Norte</option>
            <option value="CI">Costa de Marfíl</option>
            <option value="CR">Costa Rica</option>
            <option value="HR">Croacia (Hrvatska)</option>
            <option value="CU">Cuba</option>
            <option value="DK">Dinamarca</option>
            <option value="DJ">Djibouti</option>
            <option value="DM">Dominica</option>
            <option value="EC">Ecuador</option>
            <option value="EG">Egipto</option>
            <option value="SV">El Salvador</option>
            <option value="AE">Emiratos Árabes Unidos</option>
            <option value="ER">Eritrea</option>
            <option value="SI">Eslovenia</option>
            <option value="ES" selected>
              España
            </option>
            <option value="US">Estados Unidos</option>
            <option value="EE">Estonia</option>
            <option value="ET">Etiopía</option>
            <option value="FJ">Fiji</option>
            <option value="PH">Filipinas</option>
            <option value="FI">Finlandia</option>
            <option value="FR">Francia</option>
            <option value="GA">Gabón</option>
            <option value="GM">Gambia</option>
            <option value="GE">Georgia</option>
            <option value="GH">Ghana</option>
            <option value="GI">Gibraltar</option>
            <option value="GD">Granada</option>
            <option value="GR">Grecia</option>
            <option value="GL">Groenlandia</option>
            <option value="GP">Guadalupe</option>
            <option value="GU">Guam</option>
            <option value="GT">Guatemala</option>
            <option value="GY">Guayana</option>
            <option value="GF">Guayana Francesa</option>
            <option value="GN">Guinea</option>
            <option value="GQ">Guinea Ecuatorial</option>
            <option value="GW">Guinea-Bissau</option>
            <option value="HT">Haití</option>
            <option value="HN">Honduras</option>
            <option value="HU">Hungría</option>
            <option value="IN">India</option>
            <option value="ID">Indonesia</option>
            <option value="IQ">Irak</option>
            <option value="IR">Irán</option>
            <option value="IE">Irlanda</option>
            <option value="BV">Isla Bouvet</option>
            <option value="CX">Isla de Christmas</option>
            <option value="IS">Islandia</option>
            <option value="KY">Islas Caimán</option>
            <option value="CK">Islas Cook</option>
            <option value="CC">Islas de Cocos o Keeling</option>
            <option value="FO">Islas Faroe</option>
            <option value="HM">Islas Heard y McDonald</option>
            <option value="FK">Islas Malvinas</option>
            <option value="MP">Islas Marianas del Norte</option>
            <option value="MH">Islas Marshall</option>
            <option value="UM">Islas menores de Estados Unidos</option>
            <option value="PW">Islas Palau</option>
            <option value="SB">Islas Salomón</option>
            <option value="SJ">Islas Svalbard y Jan Mayen</option>
            <option value="TK">Islas Tokelau</option>
            <option value="TC">Islas Turks y Caicos</option>
            <option value="VI">Islas Vírgenes (EEUU)</option>
            <option value="VG">Islas Vírgenes (Reino Unido)</option>
            <option value="WF">Islas Wallis y Futuna</option>
            <option value="IL">Israel</option>
            <option value="IT">Italia</option>
            <option value="JM">Jamaica</option>
            <option value="JP">Japón</option>
            <option value="JO">Jordania</option>
            <option value="KZ">Kazajistán</option>
            <option value="KE">Kenia</option>
            <option value="KG">Kirguizistán</option>
            <option value="KI">Kiribati</option>
            <option value="KW">Kuwait</option>
            <option value="LA">Laos</option>
            <option value="LS">Lesotho</option>
            <option value="LV">Letonia</option>
            <option value="LB">Líbano</option>
            <option value="LR">Liberia</option>
            <option value="LY">Libia</option>
            <option value="LI">Liechtenstein</option>
            <option value="LT">Lituania</option>
            <option value="LU">Luxemburgo</option>
            <option value="MK">Macedonia, Ex-República Yugoslava de</option>
            <option value="MG">Madagascar</option>
            <option value="MY">Malasia</option>
            <option value="MW">Malawi</option>
            <option value="MV">Maldivas</option>
            <option value="ML">Malí</option>
            <option value="MT">Malta</option>
            <option value="MA">Marruecos</option>
            <option value="MQ">Martinica</option>
            <option value="MU">Mauricio</option>
            <option value="MR">Mauritania</option>
            <option value="YT">Mayotte</option>
            <option value="MX">México</option>
            <option value="FM">Micronesia</option>
            <option value="MD">Moldavia</option>
            <option value="MC">Mónaco</option>
            <option value="MN">Mongolia</option>
            <option value="MS">Montserrat</option>
            <option value="MZ">Mozambique</option>
            <option value="NA">Namibia</option>
            <option value="NR">Nauru</option>
            <option value="NP">Nepal</option>
            <option value="NI">Nicaragua</option>
            <option value="NE">Níger</option>
            <option value="NG">Nigeria</option>
            <option value="NU">Niue</option>
            <option value="NF">Norfolk</option>
            <option value="NO">Noruega</option>
            <option value="NC">Nueva Caledonia</option>
            <option value="NZ">Nueva Zelanda</option>
            <option value="OM">Omán</option>
            <option value="NL">Países Bajos</option>
            <option value="PA">Panamá</option>
            <option value="PG">Papúa Nueva Guinea</option>
            <option value="PK">Paquistán</option>
            <option value="PY">Paraguay</option>
            <option value="PE">Perú</option>
            <option value="PN">Pitcairn</option>
            <option value="PF">Polinesia Francesa</option>
            <option value="PL">Polonia</option>
            <option value="PT">Portugal</option>
            <option value="PR">Puerto Rico</option>
            <option value="QA">Qatar</option>
            <option value="UK">Reino Unido</option>
            <option value="CF">República Centroafricana</option>
            <option value="CZ">República Checa</option>
            <option value="ZA">República de Sudáfrica</option>
            <option value="DO">República Dominicana</option>
            <option value="SK">República Eslovaca</option>
            <option value="RE">Reunión</option>
            <option value="RW">Ruanda</option>
            <option value="RO">Rumania</option>
            <option value="RU">Rusia</option>
            <option value="EH">Sahara Occidental</option>
            <option value="KN">Saint Kitts y Nevis</option>
            <option value="WS">Samoa</option>
            <option value="AS">Samoa Americana</option>
            <option value="SM">San Marino</option>
            <option value="VC">San Vicente y Granadinas</option>
            <option value="SH">Santa Helena</option>
            <option value="LC">Santa Lucía</option>
            <option value="ST">Santo Tomé y Príncipe</option>
            <option value="SN">Senegal</option>
            <option value="SC">Seychelles</option>
            <option value="SL">Sierra Leona</option>
            <option value="SG">Singapur</option>
            <option value="SY">Siria</option>
            <option value="SO">Somalia</option>
            <option value="LK">Sri Lanka</option>
            <option value="PM">St Pierre y Miquelon</option>
            <option value="SZ">Suazilandia</option>
            <option value="SD">Sudán</option>
            <option value="SE">Suecia</option>
            <option value="CH">Suiza</option>
            <option value="SR">Surinam</option>
            <option value="TH">Tailandia</option>
            <option value="TW">Taiwán</option>
            <option value="TZ">Tanzania</option>
            <option value="TJ">Tayikistán</option>
            <option value="TF">Territorios franceses del Sur</option>
            <option value="TP">Timor Oriental</option>
            <option value="TG">Togo</option>
            <option value="TO">Tonga</option>
            <option value="TT">Trinidad y Tobago</option>
            <option value="TN">Túnez</option>
            <option value="TM">Turkmenistán</option>
            <option value="TR">Turquía</option>
            <option value="TV">Tuvalu</option>
            <option value="UA">Ucrania</option>
            <option value="UG">Uganda</option>
            <option value="UY">Uruguay</option>
            <option value="UZ">Uzbekistán</option>
            <option value="VU">Vanuatu</option>
            <option value="VE">Venezuela</option>
            <option value="VN">Vietnam</option>
            <option value="YE">Yemen</option>
            <option value="YU">Yugoslavia</option>
            <option value="ZM">Zambia</option>
            <option value="ZW">Zimbabue</option>
          </select>

          <input
            type="text"
            placeholder="Record del deportista..."
            required
            onChange={onChangeRecord}
            className="ancho"
          />

          <input
            type="text"
            placeholder="Descripcion..."
            required
            onChange={onChangeDescripcion}
            className="ancho"
          />
        </div>

        <div className="btn-registrar">
          {/* <p>Cargar Imagen</p> FALTA EL UPLOAD DE IMAGEN */}

          <button type="submit" className="buttonFormRegistrar">
            Registrar
          </button>
        </div>
        <div className="btn-atras">
          <button type="" className="buttonFormAtras">
            ATRAS
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
