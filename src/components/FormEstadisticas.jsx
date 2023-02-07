import { useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { postEstadistica } from "../api/Rule_deportistas";
import { Link, useLocation } from "react-router-dom";

function FormEstadisticas(props) {
  const [addEstadistica, setAddEstadistica] = useState({});

  const location = useLocation();
  const { idDeportista } = location.state;

  const nuevaEstadistica = async (estadistica) => {
    await postEstadistica(estadistica).then((response) => {
      setAddEstadistica(response);
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    nuevaEstadistica(data);
    alert("Se agregaron las estadisticas correctamente");
  };
  console.log(nuevaEstadistica);

  return (
    <div className="contenedorEstadisticas">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="formEstadisticas"
      >
        <div className="id">
          <input type="id" value={idDeportista} {...register("id")} />
        </div>
        <select name="energia" className="energia" {...register("energia")}>
          <option value="energia" selected>
            Energia
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
        </select>
        <select name="fuerza" className="fuerza" {...register("fuerza")}>
          <option value="fuerza" selected>
            fuerza
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
        </select>
        <select
          name="resistencia"
          className="resistencia"
          {...register("resistencia")}
        >
          <option value="resistencia" selected>
            Resistencia
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
        </select>
        <select name="agilidad" className="agilidad" {...register("agilidad")}>
          <option value="agilidad" selected>
            Agilidad
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
        </select>
        <select name="aguante" className="aguante" {...register("aguante")}>
          <option value="aguante" selected>
            Aguante
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
        </select>
        <select
          name="dedicacion"
          className="dedicacion"
          {...register("dedicacion")}
        >
          <option value="dedicacion" selected>
            Dedicacion
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
        </select>
        <select
          name="profecionalismo"
          className="profecionalismo"
          {...register("profecionalismo")}
        >
          <option value="profecionalismo" selected>
            Profesionalismo
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
        </select>
        <button type="submit">Agregar</button>
        <br />
        <Link to="/">
          <button>Atras</button>
        </Link>
      </form>
    </div>
  );
}

export default FormEstadisticas;
